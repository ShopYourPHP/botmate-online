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
exports.FiltersController = void 0;
const filter_entity_1 = require("../../entities/filter.entity");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const save_filter_dto_1 = require("./dto/save-filter.dto");
const filters_service_1 = require("./filters.service");
let FiltersController = class FiltersController {
    constructor(filterService) {
        this.filterService = filterService;
    }
    getFilters(chatId, botId, type) {
        return this.filterService.getFilter(botId, chatId, type);
    }
    saveFilters(chatId, botId, data) {
        return this.filterService.saveFilter(botId, chatId, data.type, data.value);
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiQuery)({
        type: 'string',
        name: 'chatId',
    }),
    (0, swagger_1.ApiQuery)({
        type: 'string',
        name: 'botId',
    }),
    (0, swagger_1.ApiQuery)({
        enum: filter_entity_1.FilterType,
        name: 'type',
    }),
    (0, swagger_1.ApiOkResponse)({
        type: filter_entity_1.Filter,
    }),
    __param(0, (0, common_1.Query)('chatId')),
    __param(1, (0, common_1.Query)('botId')),
    __param(2, (0, common_1.Query)('type')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", void 0)
], FiltersController.prototype, "getFilters", null);
__decorate([
    (0, common_1.Put)(),
    (0, swagger_1.ApiQuery)({
        type: 'string',
        name: 'chatId',
    }),
    (0, swagger_1.ApiQuery)({
        type: 'string',
        name: 'botId',
    }),
    __param(0, (0, common_1.Query)('chatId')),
    __param(1, (0, common_1.Query)('botId')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, save_filter_dto_1.SaveFilterDTO]),
    __metadata("design:returntype", void 0)
], FiltersController.prototype, "saveFilters", null);
FiltersController = __decorate([
    (0, swagger_1.ApiTags)('filters'),
    (0, common_1.Controller)('filters'),
    __metadata("design:paramtypes", [filters_service_1.FiltersService])
], FiltersController);
exports.FiltersController = FiltersController;
//# sourceMappingURL=filters.controller.js.map