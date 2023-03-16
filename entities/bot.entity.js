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
exports.Bot = void 0;
const bot_types_1 = require("../common/bot.types");
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const chat_entity_1 = require("./chat.entity");
const command_entity_1 = require("./command.entity");
const conversation_entity_1 = require("./conversation.entity");
const user_entity_1 = require("./user.entity");
let Bot = class Bot {
};
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.PrimaryColumn)({ unique: true }),
    __metadata("design:type", String)
], Bot.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Bot.prototype, "first_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], Bot.prototype, "username", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], Bot.prototype, "token", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Bot.prototype, "avatar", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        enum: bot_types_1.BotStatus,
    }),
    (0, typeorm_1.Column)({ default: bot_types_1.BotStatus.INACTIVE }),
    __metadata("design:type", String)
], Bot.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Bot.prototype, "created_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: () => user_entity_1.User,
    }),
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.bots),
    __metadata("design:type", user_entity_1.User)
], Bot.prototype, "user", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: () => [command_entity_1.Command],
    }),
    (0, typeorm_1.OneToMany)(() => command_entity_1.Command, (command) => command.bot),
    __metadata("design:type", Array)
], Bot.prototype, "commands", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: () => [chat_entity_1.Chat],
    }),
    (0, typeorm_1.OneToMany)(() => chat_entity_1.Chat, (chat) => chat.bot),
    __metadata("design:type", Array)
], Bot.prototype, "chats", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.OneToMany)(() => conversation_entity_1.Conversation, (conversation) => conversation.bot),
    __metadata("design:type", Array)
], Bot.prototype, "conversations", void 0);
Bot = __decorate([
    (0, typeorm_1.Entity)({ name: 'bots' })
], Bot);
exports.Bot = Bot;
//# sourceMappingURL=bot.entity.js.map