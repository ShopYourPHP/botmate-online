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
exports.BotService = void 0;
const bot_entity_1 = require("../../entities/bot.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const grammy_1 = require("grammy");
const download_service_1 = require("../download/download.service");
let BotService = class BotService {
    constructor(botRepository, downloadService) {
        this.botRepository = botRepository;
        this.downloadService = downloadService;
    }
    getBotsByUserId(id) {
        return this.botRepository.find({
            where: {
                user: {
                    id,
                },
            },
        });
    }
    async createBot(token, userId) {
        const bot = new grammy_1.Bot(token);
        await bot.init();
        const botData = await bot.api.getMe();
        const existingBot = await this.botRepository.count({
            where: {
                id: botData.id.toString(),
            },
        });
        if (existingBot) {
            throw new Error('Bot already exists');
        }
        const botEntity = this.botRepository.create({
            token,
            id: botData.id.toString(),
            avatar: '',
            username: botData.username,
            first_name: botData.first_name,
            created_at: new Date().toISOString(),
            user: {
                id: userId,
            },
        });
        await this.botRepository.save(botEntity);
        const botPhotos = await bot.api.getUserProfilePhotos(botData.id);
        if (botPhotos) {
            const file = await bot.api.getFile(botPhotos.photos[0][0].file_id);
            this.downloadService.download(`https://api.telegram.org/file/bot${token}/${file.file_path}`, 'photo', `${botData.id.toString()}.jpg`);
        }
        return botEntity;
    }
    updateBot(id, data) {
        return this.botRepository.update({ id }, Object.assign({}, data));
    }
    async deleteBot(id) {
        return this.botRepository.delete({
            id,
        });
    }
};
BotService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(bot_entity_1.Bot)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        download_service_1.DownloadService])
], BotService);
exports.BotService = BotService;
//# sourceMappingURL=bot.service.js.map