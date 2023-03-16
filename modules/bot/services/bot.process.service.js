"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var BotProcessService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BotProcessService = void 0;
const grammy_1 = require("grammy");
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const bot_entity_1 = require("../../../entities/bot.entity");
const typeorm_2 = require("typeorm");
const bot_types_1 = require("../../../common/bot.types");
const command_service_1 = require("../../command/command.service");
const common_2 = require("../../../common");
const chat_entity_1 = require("../../../entities/chat.entity");
const download_service_1 = require("../../download/download.service");
const bot_filter_service_1 = require("./bot.filter.service");
const event_emitter_1 = require("@nestjs/event-emitter");
const bot_restart_event_1 = require("../events/bot-restart.event");
const conversations_1 = require("@grammyjs/conversations");
const entities_1 = require("../../../entities");
const vm2_1 = require("vm2");
const bot_sandbox_1 = require("./bot.sandbox");
const socket_service_1 = require("../../../gateways/socket.service");
let BotProcessService = BotProcessService_1 = class BotProcessService {
    constructor(botRepository, chatRepository, cnvRepository, cmdService, downloadService, filterService, botSandbox, socketService) {
        this.botRepository = botRepository;
        this.chatRepository = chatRepository;
        this.cnvRepository = cnvRepository;
        this.cmdService = cmdService;
        this.downloadService = downloadService;
        this.filterService = filterService;
        this.botSandbox = botSandbox;
        this.socketService = socketService;
        this.processes = new Map();
        this.logger = new common_2.BotMateLogger(BotProcessService_1.name);
    }
    async startBot(botId) {
        const botData = await this.botRepository.findOne({ where: { id: botId } });
        if (!botData)
            throw new Error('Bot not found');
        try {
            const bot = new grammy_1.Bot(botData.token);
            bot.use((0, grammy_1.session)({
                initial() {
                    return {};
                },
            }));
            bot.use((0, conversations_1.conversations)());
            const botConversations = await this.cnvRepository.find({
                where: {
                    bot: {
                        id: botId,
                    },
                },
            });
            const vm = new vm2_1.NodeVM({
                sandbox: Object.assign({ Bot: bot, createConversation: conversations_1.createConversation }, this.botSandbox.getSandbox(botData.id)),
            });
            for (const cnv of botConversations) {
                vm.run(`
            async function cnv_${cnv.id}(conversation, Ctx) {
              ${cnv.script}
            }
            Bot.use(createConversation(cnv_${cnv.id}, '${cnv.name}'));
        `);
            }
            const botCommands = await this.cmdService.findAllCommands(botId);
            for (const botCommand of botCommands) {
                const { command, script } = botCommand;
                if (command.startsWith('/')) {
                    const cmd = command.replace('/', '');
                    vm.run(`Bot.command('${cmd}', async (Ctx) => {
                ${script}
              });
            `);
                }
                else {
                    try {
                        vm.run(`Bot.on('${command}', async (Ctx) => {
              ${script}
            });`);
                    }
                    catch (e) {
                        vm.run(`Bot.hears('${command}', async (Ctx) => {
              ${script}
            });`);
                    }
                }
            }
            bot.catch((err) => {
                this.logger.error(err);
                this.socketService.socket
                    .to(botData.id)
                    .emit('bot:error', err.toString());
            });
            this.filterService.setupFilters(bot);
            bot.on(':new_chat_members:me', async (ctx) => {
                this.logger.debug('Joined new chat: ' + ctx.chat.id.toString());
                const chat = await ctx.getChat();
                if (chat.photo) {
                    const file = await ctx.api.getFile(chat.photo.small_file_id);
                    this.downloadService.download(`https://api.telegram.org/file/bot${botData.token}/${file.file_path}`, 'photo', `${ctx.chat.id.toString()}.jpg`);
                }
            });
            bot.use(async (ctx, next) => {
                this.socketService.socket
                    .to(botData.id)
                    .emit('bot:message', ctx.message);
                next();
                try {
                    let chat;
                    const exist = await this.chatRepository.count({
                        where: {
                            chat_id: ctx.chat.id.toString(),
                            bot: {
                                id: botId,
                            },
                        },
                    });
                    if (exist > 0)
                        return;
                    const userPhoto = await ctx.getUserProfilePhotos();
                    if (userPhoto) {
                        const lastestPhoto = userPhoto.photos[0][0];
                        const file = await ctx.api.getFile(lastestPhoto.file_id);
                        this.downloadService.download(`https://api.telegram.org/file/bot${botData.token}/${file.file_path}`, 'photo', `${ctx.from.id.toString()}.jpg`);
                    }
                    if (ctx.chat.type === 'private') {
                        chat = this.chatRepository.create({
                            chat_id: ctx.chat.id.toString(),
                            type: ctx.chat.type,
                            title: '',
                            first_name: ctx.chat.first_name,
                            last_name: ctx.chat.last_name,
                            bot: {
                                id: botId,
                            },
                        });
                    }
                    else {
                        chat = this.chatRepository.create({
                            chat_id: ctx.chat.id.toString(),
                            type: ctx.chat.type,
                            title: ctx.chat.title,
                            first_name: '',
                            last_name: '',
                            bot: {
                                id: botId,
                            },
                        });
                    }
                    await this.chatRepository.save(chat);
                }
                catch (e) {
                    this.logger.error('Error while saving chat');
                    this.logger.error(e);
                }
            });
            bot.start();
            this.processes.set(botId, bot);
        }
        catch (e) {
            this.logger.error('Error while starting bot: ' + botId);
            this.logger.error(e);
            throw new Error('Unable to start bot');
        }
        await this.botRepository.update({ id: botId }, {
            status: bot_types_1.BotStatus.ACTIVE,
        });
        return true;
    }
    async startAllBots() {
        let count = 0;
        const bots = await this.botRepository.find({
            where: {
                status: bot_types_1.BotStatus.ACTIVE,
            },
        });
        for (const bot of bots) {
            await this.startBot(bot.id);
            count++;
        }
        this.logger.debug(`Auto restarted ${count} bot(s)`);
    }
    async stopBot(botId) {
        const bot = this.processes.get(botId);
        if (!bot)
            return;
        await bot.stop();
        await this.botRepository.update({ id: botId }, {
            status: bot_types_1.BotStatus.INACTIVE,
        });
        return true;
    }
    async restartBot(data) {
        this.logger.debug('Restarting bot: ' + data.botId);
        const { botId } = data;
        await this.stopBot(botId);
        await this.startBot(botId);
    }
};
__decorate([
    (0, event_emitter_1.OnEvent)('bot.restart'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [bot_restart_event_1.BotRestartEvent]),
    __metadata("design:returntype", Promise)
], BotProcessService.prototype, "restartBot", null);
BotProcessService = BotProcessService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(bot_entity_1.Bot)),
    __param(1, (0, typeorm_1.InjectRepository)(chat_entity_1.Chat)),
    __param(2, (0, typeorm_1.InjectRepository)(entities_1.Conversation)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        command_service_1.CommandService,
        download_service_1.DownloadService,
        bot_filter_service_1.BotFilterService,
        bot_sandbox_1.BotSandbox,
        socket_service_1.SocketService])
], BotProcessService);
exports.BotProcessService = BotProcessService;
//# sourceMappingURL=bot.process.service.js.map