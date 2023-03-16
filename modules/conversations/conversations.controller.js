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
exports.ConversationsController = void 0;
const entities_1 = require("../../entities");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const create_conversation_dto_1 = require("./dto/create-conversation.dto");
const conversations_service_1 = require("./conversations.service");
const update_conversation_dto_1 = require("./dto/update-conversation.dto");
let ConversationsController = class ConversationsController {
    constructor(cnvService) {
        this.cnvService = cnvService;
    }
    findConversations(botId) {
        return this.cnvService.getConversationsByBotId(botId);
    }
    findConversation(id) {
        return this.cnvService.getConversationsById(id);
    }
    createConversation(botId, body) {
        return this.cnvService.createConversation(botId, body);
    }
    updateConversation(id, body) {
        return this.cnvService.updateConversation(id, body);
    }
};
__decorate([
    (0, swagger_1.ApiQuery)({
        name: 'botId',
        required: true,
    }),
    (0, swagger_1.ApiOkResponse)({
        type: () => entities_1.Conversation,
        isArray: true,
    }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('botId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ConversationsController.prototype, "findConversations", null);
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'id',
        required: true,
    }),
    (0, swagger_1.ApiOkResponse)({
        type: () => entities_1.Conversation,
    }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ConversationsController.prototype, "findConversation", null);
__decorate([
    (0, swagger_1.ApiQuery)({
        name: 'botId',
        required: true,
    }),
    (0, swagger_1.ApiOkResponse)({
        type: entities_1.Conversation,
    }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Query)('botId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_conversation_dto_1.CreateConversationDTO]),
    __metadata("design:returntype", void 0)
], ConversationsController.prototype, "createConversation", null);
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'id',
        required: true,
    }),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_conversation_dto_1.UpdateConversationDTO]),
    __metadata("design:returntype", void 0)
], ConversationsController.prototype, "updateConversation", null);
ConversationsController = __decorate([
    (0, swagger_1.ApiTags)('conversations'),
    (0, common_1.Controller)('conversations'),
    __metadata("design:paramtypes", [conversations_service_1.ConversationsService])
], ConversationsController);
exports.ConversationsController = ConversationsController;
//# sourceMappingURL=conversations.controller.js.map