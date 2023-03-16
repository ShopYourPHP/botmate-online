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
exports.Chat = exports.ChatType = void 0;
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const bot_entity_1 = require("./bot.entity");
var ChatType;
(function (ChatType) {
    ChatType["PRIVATE"] = "private";
    ChatType["GROUP"] = "group";
    ChatType["SUPERGROUP"] = "supergroup";
    ChatType["CHANNEL"] = "channel";
})(ChatType = exports.ChatType || (exports.ChatType = {}));
let Chat = class Chat {
};
__decorate([
    (0, swagger_1.ApiResponseProperty)(),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", String)
], Chat.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Chat.prototype, "chat_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: ChatType,
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Chat.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Chat.prototype, "username", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Chat.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Chat.prototype, "first_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Chat.prototype, "last_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
    }),
    (0, typeorm_1.ManyToOne)(() => bot_entity_1.Bot, (bot) => bot.chats, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", bot_entity_1.Bot)
], Chat.prototype, "bot", void 0);
Chat = __decorate([
    (0, typeorm_1.Entity)({ name: 'chats' })
], Chat);
exports.Chat = Chat;
//# sourceMappingURL=chat.entity.js.map