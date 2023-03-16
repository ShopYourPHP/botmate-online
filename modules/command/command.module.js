"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandModule = void 0;
const entities_1 = require("../../entities");
const chat_entity_1 = require("../../entities/chat.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const grammy_1 = require("grammy");
const bot_module_1 = require("../bot/bot.module");
const settings_service_1 = require("../settings/settings.service");
const command_controller_1 = require("./command.controller");
const command_service_1 = require("./command.service");
let CommandModule = class CommandModule {
};
CommandModule = __decorate([
    (0, common_1.Module)({
        imports: [
            bot_module_1.BotModule,
            typeorm_1.TypeOrmModule.forFeature([entities_1.Command, grammy_1.Bot, chat_entity_1.Chat, entities_1.Settings]),
        ],
        controllers: [command_controller_1.CommandController],
        providers: [command_service_1.CommandService, settings_service_1.SettingsService],
    })
], CommandModule);
exports.CommandModule = CommandModule;
//# sourceMappingURL=command.module.js.map