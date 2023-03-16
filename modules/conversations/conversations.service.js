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
exports.ConversationsService = void 0;
const entities_1 = require("../../entities");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let ConversationsService = class ConversationsService {
    constructor(cnvRepo) {
        this.cnvRepo = cnvRepo;
    }
    async getConversationsById(id) {
        const conversations = await this.cnvRepo.findOne({
            where: {
                id,
            },
        });
        return conversations;
    }
    async getConversationsByBotId(botId) {
        const conversations = await this.cnvRepo.find({
            where: {
                bot: {
                    id: botId,
                },
            },
        });
        return conversations;
    }
    createConversation(botId, data) {
        const newConversation = this.cnvRepo.create({
            bot: {
                id: botId,
            },
            name: data.name,
            script: data.script,
            updatedAt: new Date().toISOString(),
        });
        return this.cnvRepo.save(newConversation);
    }
    async updateConversation(id, data) {
        const conversation = await this.cnvRepo.findOne({
            where: {
                id,
            },
        });
        if (!conversation) {
            return null;
        }
        conversation.script = data.script;
        conversation.updatedAt = new Date().toISOString();
        return this.cnvRepo.save(conversation);
    }
    async deleteConversation(id) {
        const conversation = await this.cnvRepo.findOne({
            where: {
                id,
            },
        });
        if (!conversation) {
            return null;
        }
        return this.cnvRepo.remove(conversation);
    }
};
ConversationsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(entities_1.Conversation)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ConversationsService);
exports.ConversationsService = ConversationsService;
//# sourceMappingURL=conversations.service.js.map