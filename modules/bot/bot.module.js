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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BotModule = void 0;
const entities_1 = require("../../entities");
const bot_entity_1 = require("../../entities/bot.entity");
const user_entity_1 = require("../../entities/user.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const command_service_1 = require("../command/command.service");
const bot_controller_1 = require("./bot.controller");
const bot_service_1 = require("./bot.service");
const bot_process_service_1 = require("./services/bot.process.service");
const chat_entity_1 = require("../../entities/chat.entity");
const chat_service_1 = require("../chat/chat.service");
const download_service_1 = require("../download/download.service");
const bot_filter_service_1 = require("./services/bot.filter.service");
const filter_entity_1 = require("../../entities/filter.entity");
const settings_service_1 = require("../settings/settings.service");
const storage_service_1 = require("../storage/storage.service");
const bot_sandbox_1 = require("./services/bot.sandbox");
let BotModule = class BotModule {
    constructor(botProcessService) {
        this.botProcessService = botProcessService;
    }
    onModuleInit() {
        this.botProcessService.startAllBots();
    }
};
BotModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                bot_entity_1.Bot,
                user_entity_1.User,
                entities_1.Command,
                chat_entity_1.Chat,
                filter_entity_1.Filter,
                entities_1.Settings,
                entities_1.Storage,
                entities_1.Conversation,
            ]),
        ],
        providers: [
            bot_service_1.BotService,
            bot_process_service_1.BotProcessService,
            command_service_1.CommandService,
            chat_service_1.ChatService,
            download_service_1.DownloadService,
            bot_filter_service_1.BotFilterService,
            settings_service_1.SettingsService,
            bot_sandbox_1.BotSandbox,
            storage_service_1.StorageService,
        ],
        controllers: [bot_controller_1.BotController],
        exports: [],
    }),
    __metadata("design:paramtypes", [bot_process_service_1.BotProcessService])
], BotModule);
exports.BotModule = BotModule;
//# sourceMappingURL=bot.module.js.map