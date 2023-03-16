"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const path = require("path");
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const config_1 = require("@nestjs/config");
const serve_static_1 = require("@nestjs/serve-static");
const event_emitter_1 = require("@nestjs/event-emitter");
const typeorm_1 = require("@nestjs/typeorm");
const entities_1 = require("./entities");
const sentry_interceptor_1 = require("./interceptors/sentry.interceptor");
const auth_module_1 = require("./modules/auth/auth.module");
const user_module_1 = require("./modules/users/user.module");
const database_module_1 = require("./modules/database/database.module");
const bot_module_1 = require("./modules/bot/bot.module");
const command_module_1 = require("./modules/command/command.module");
const chat_module_1 = require("./modules/chat/chat.module");
const download_controller_1 = require("./modules/download/download.controller");
const filters_module_1 = require("./modules/filters/filters.module");
const botmate_module_1 = require("./modules/botmate/botmate.module");
const ancmt_module_1 = require("./modules/ancmt/ancmt.module");
const triggers_module_1 = require("./modules/triggers/triggers.module");
const conversations_module_1 = require("./modules/conversations/conversations.module");
const socket_module_1 = require("./gateways/socket.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            socket_module_1.SocketModule,
            event_emitter_1.EventEmitterModule.forRoot(),
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: path.join(__dirname, 'client'),
                exclude: ['/api/(.*)', '/socket.io/(.*)'],
            }),
            typeorm_1.TypeOrmModule.forFeature([entities_1.Settings]),
            botmate_module_1.BotMateModule,
            database_module_1.DatabaseModule,
            user_module_1.UserModule,
            auth_module_1.AuthModule,
            bot_module_1.BotModule,
            command_module_1.CommandModule,
            chat_module_1.ChatModule,
            filters_module_1.FiltersModule,
            ancmt_module_1.AnnouncementsModule,
            triggers_module_1.TriggersModule,
            conversations_module_1.ConversationsModule,
        ],
        controllers: [download_controller_1.DownloadController],
        providers: [
            {
                provide: core_1.APP_INTERCEPTOR,
                useClass: sentry_interceptor_1.SentryInterceptor,
            },
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map