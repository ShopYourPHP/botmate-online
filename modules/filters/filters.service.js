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
exports.FiltersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const filter_entity_1 = require("../../entities/filter.entity");
let FiltersService = class FiltersService {
    constructor(filterRepo) {
        this.filterRepo = filterRepo;
    }
    async saveFilter(botId, chatId, type, value) {
        const exist = await this.filterRepo.findOne({
            where: {
                bot_id: botId,
                chat_id: chatId,
                type,
            },
        });
        if (exist) {
            exist.value = value;
            return this.filterRepo.save(exist);
        }
        const filter = this.filterRepo.create({
            bot_id: botId,
            chat_id: chatId,
            type,
            value,
        });
        return this.filterRepo.save(filter);
    }
    async getFilter(botId, chatId, type) {
        return this.filterRepo.findOne({
            where: {
                bot_id: botId,
                chat_id: chatId,
                type,
            },
        });
    }
};
FiltersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(filter_entity_1.Filter)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], FiltersService);
exports.FiltersService = FiltersService;
//# sourceMappingURL=filters.service.js.map