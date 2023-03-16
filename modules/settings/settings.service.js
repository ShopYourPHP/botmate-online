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
var SettingsService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingsService = void 0;
const common_1 = require("../../common");
const entities_1 = require("../../entities");
const common_2 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let SettingsService = SettingsService_1 = class SettingsService {
    constructor(settingsRepo) {
        this.settingsRepo = settingsRepo;
        this.logger = new common_1.BotMateLogger(SettingsService_1.name);
    }
    async load(key, defaultValue) {
        const setting = await this.settingsRepo.findOne({ where: { key } });
        return setting ? setting.value : defaultValue;
    }
    async save(key, value, scope, defaultValue) {
        const exists = await this.settingsRepo.findOne({ where: { key, scope } });
        if (exists) {
            exists.value = value;
            return this.settingsRepo.save(exists).catch((err) => {
                this.logger.error("Couldn't save settings value");
                this.logger.error(err);
                return defaultValue;
            });
        }
        const setting = this.settingsRepo.create({
            key,
            value,
            scope,
        });
        if (defaultValue)
            return this.settingsRepo.save(setting).catch((err) => {
                this.logger.error("Couldn't save settings value");
                this.logger.error(err);
                return defaultValue;
            });
    }
};
SettingsService = SettingsService_1 = __decorate([
    (0, common_2.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(entities_1.Settings)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SettingsService);
exports.SettingsService = SettingsService;
//# sourceMappingURL=settings.service.js.map