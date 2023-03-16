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
exports.ChatController = void 0;
const chat_entity_1 = require("../../entities/chat.entity");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const chat_service_1 = require("./chat.service");
let ChatController = class ChatController {
    constructor(chatService) {
        this.chatService = chatService;
    }
    async getBotChats(botId, type) {
        return this.chatService.getBotChats(botId, type);
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOkResponse)({
        description: 'Get bot chats',
        type: [chat_entity_1.Chat],
    }),
    (0, swagger_1.ApiQuery)({
        type: 'string',
        name: 'botId',
    }),
    (0, swagger_1.ApiQuery)({
        type: 'string',
        name: 'type',
        description: 'Chat type',
        enum: chat_entity_1.ChatType,
    }),
    __param(0, (0, common_1.Query)('botId')),
    __param(1, (0, common_1.Query)('type')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ChatController.prototype, "getBotChats", null);
ChatController = __decorate([
    (0, swagger_1.ApiTags)('chats'),
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [chat_service_1.ChatService])
], ChatController);
exports.ChatController = ChatController;
//# sourceMappingURL=chat.controller.js.map