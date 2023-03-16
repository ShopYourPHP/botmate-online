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
var BotFilterService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BotFilterService = void 0;
const common_1 = require("../../../common");
const filter_entity_1 = require("../../../entities/filter.entity");
const common_2 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let BotFilterService = BotFilterService_1 = class BotFilterService {
    constructor(filterRepository) {
        this.filterRepository = filterRepository;
        this.logger = new common_1.BotMateLogger(BotFilterService_1.name);
    }
    setupFilters(bot) {
        bot.use(async (ctx, next) => {
            next();
            const filterData = await this.filterRepository.find({
                where: {
                    bot_id: ctx.me.id.toString(),
                    chat_id: ctx.chat.id.toString(),
                },
            });
            if (!filterData)
                return;
            const messagesFilterData = filterData.find((filter) => filter.type === filter_entity_1.FilterType.MESSAGES);
            const serviceMessagesFilterData = filterData.find((filter) => filter.type === filter_entity_1.FilterType.SERVICE_MESSAGES);
            const wordsFilterData = filterData.find((filter) => filter.type === filter_entity_1.FilterType.WORDS);
            try {
                if (messagesFilterData) {
                    this.filterMessage(ctx, messagesFilterData.value);
                }
                if (serviceMessagesFilterData) {
                    this.filterServiceMessage(ctx, serviceMessagesFilterData.value);
                }
                if (wordsFilterData) {
                    this.filterWords(ctx, wordsFilterData.value);
                }
            }
            catch (e) {
                this.logger.error("Can't filter message");
                this.logger.error(e);
            }
        });
    }
    async filterWords(ctx, data) {
        if (ctx.message.text) {
            const userWords = ctx.message.text.split(' ');
            const words = data.words.split(',');
            for (let userWord of userWords) {
                userWord = userWord.toLowerCase();
                if (words.includes(userWord)) {
                    ctx.deleteMessage();
                    break;
                }
            }
        }
    }
    async filterServiceMessage(ctx, data) {
        var _a;
        if (((_a = ctx.message.new_chat_members) === null || _a === void 0 ? void 0 : _a.length) > 0) {
            if (data.new_chat_members) {
                ctx.deleteMessage();
            }
        }
        if (ctx.message.left_chat_member) {
            if (data.left_chat_member) {
                ctx.deleteMessage();
            }
        }
        if (ctx.message.pinned_message) {
            if (data.pinned_message) {
                ctx.deleteMessage();
            }
        }
    }
    async filterMessage(ctx, data) {
        const messageTypes = Object.keys(data);
        const logger = this.logger;
        function filterLinks() {
            const method = data.links.method;
            const filteredUrls = data.links.filter.split(',');
            const text = ctx.message.text || '';
            const regex = /([^\S]|^)(((https?\:\/\/)|(www\.))(\S+))/gi;
            const urls = text.match(regex);
            if (urls) {
                urls.forEach((url) => {
                    const urlObject = new URL(url.toLowerCase());
                    if (filteredUrls.includes(urlObject.hostname)) {
                        if (method === 'block') {
                            ctx.deleteMessage();
                        }
                    }
                    else {
                        if (method === 'allow') {
                            ctx.deleteMessage();
                        }
                    }
                });
            }
            else {
                const entities = ctx.message.entities;
                if (entities) {
                    for (const entity of entities) {
                        if (entity.type === 'url') {
                            if (data.links.filter === '') {
                                ctx.deleteMessage();
                                break;
                            }
                            if (messageTypes.includes('links')) {
                                const url = ctx.message.text.substring(entity.offset, entity.offset + entity.length);
                                try {
                                    if (filteredUrls.includes(url)) {
                                        if (method === 'block') {
                                            ctx.deleteMessage();
                                            break;
                                        }
                                    }
                                    else {
                                        if (method === 'allow') {
                                            ctx.deleteMessage();
                                            break;
                                        }
                                    }
                                }
                                catch (e) {
                                    logger.error(e);
                                }
                            }
                        }
                    }
                }
            }
        }
        function filterSticker() {
            const stickers = data.stickers;
            if (!ctx.message.sticker)
                return;
            if (!stickers)
                return;
            const method = stickers.method || 'allow';
            const filteredStickers = (stickers === null || stickers === void 0 ? void 0 : stickers.filter.length) > 1 ? stickers.filter.split(',') : [];
            if (method === 'block' && filteredStickers.length === 0) {
                if (filteredStickers.length === 0) {
                    ctx.deleteMessage();
                }
            }
            for (let stickerPack of filteredStickers) {
                stickerPack = stickerPack.trim();
                if (method === 'block') {
                    if (ctx.message.sticker.set_name === stickerPack) {
                        ctx.deleteMessage();
                        return;
                    }
                }
                else {
                    if (ctx.message.sticker.set_name !== stickerPack) {
                        ctx.deleteMessage();
                        return;
                    }
                }
            }
        }
        function filterMentions() {
            var _a;
            const mentions = data.mentions;
            if (!mentions)
                return;
            const method = mentions.method || 'allow';
            const filteredMentions = (mentions === null || mentions === void 0 ? void 0 : mentions.filter.length) > 1 ? mentions.filter.split(',') : [];
            if (method === 'block' && filteredMentions.length === 0) {
                if (filteredMentions.length === 0) {
                    ctx.deleteMessage();
                }
            }
            (_a = ctx.message.entities) === null || _a === void 0 ? void 0 : _a.forEach((entity) => {
                if (entity.type === 'mention') {
                    let mention = ctx.message.text.substring(entity.offset, entity.offset + entity.length);
                    mention = mention.replace('@', '');
                    for (let filteredMention of filteredMentions) {
                        filteredMention = filteredMention.trim();
                        if (method === 'block') {
                            if (mention === filteredMention) {
                                ctx.deleteMessage();
                                return;
                            }
                        }
                        else {
                            if (mention !== filteredMention) {
                                ctx.deleteMessage();
                                return;
                            }
                        }
                    }
                }
            });
        }
        filterLinks();
        filterSticker();
        filterMentions();
    }
};
BotFilterService = BotFilterService_1 = __decorate([
    (0, common_2.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(filter_entity_1.Filter)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], BotFilterService);
exports.BotFilterService = BotFilterService;
//# sourceMappingURL=bot.filter.service.js.map