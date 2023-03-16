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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandService = void 0;
const entities_1 = require("../../entities");
const common_1 = require("@nestjs/common");
const event_emitter_1 = require("@nestjs/event-emitter");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const bot_restart_event_1 = require("../bot/events/bot-restart.event");
const settings_service_1 = require("../settings/settings.service");
let CommandService = class CommandService {
    constructor(cmdRepo, settingsService, eventEmitter) {
        this.cmdRepo = cmdRepo;
        this.settingsService = settingsService;
        this.eventEmitter = eventEmitter;
    }
    async createCommand(command) {
        const newCommand = this.cmdRepo.create(Object.assign(Object.assign({}, command), { createdAt: new Date().toISOString() }));
        return this.cmdRepo.save(newCommand);
    }
    async getCommandById(id) {
        return this.cmdRepo.findOne({
            where: { id },
        });
    }
    async updateCommand(id, command) {
        const commandData = await this.cmdRepo.findOne({
            select: { bot: { id: true } },
            where: { id },
            relations: ['bot'],
        });
        this.eventEmitter.emit('bot.restart', new bot_restart_event_1.BotRestartEvent(commandData.bot.id));
        return this.cmdRepo.update({ id }, Object.assign(Object.assign({}, command), { updatedAt: new Date().toISOString() }));
    }
    async getCommandsByBotId(botId) {
        const commands = await this.cmdRepo.find({
            where: {
                bot: {
                    id: botId,
                },
            },
        });
        return commands;
    }
    async findCommand(botId, command) {
        const cmd = await this.cmdRepo.findOne({
            where: {
                bot: {
                    id: botId,
                },
                command,
            },
        });
        return cmd;
    }
    async findAllCommands(botId) {
        const commands = await this.cmdRepo.find({
            where: {
                bot: {
                    id: botId,
                },
            },
        });
        return commands;
    }
};
CommandService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(entities_1.Command)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        settings_service_1.SettingsService,
        event_emitter_1.EventEmitter2])
], CommandService);
exports.CommandService = CommandService;
//# sourceMappingURL=command.service.js.map