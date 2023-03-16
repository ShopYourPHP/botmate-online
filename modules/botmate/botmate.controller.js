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
exports.BotMateController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const settings_service_1 = require("../settings/settings.service");
const botmate_service_1 = require("./botmate.service");
class VersionApiResult {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], VersionApiResult.prototype, "version", void 0);
let BotMateController = class BotMateController {
    constructor(bmService, confService) {
        this.bmService = bmService;
        this.confService = confService;
    }
    async getVersion() {
        const version = await this.bmService.getVersion();
        return { version };
    }
    update() {
        return this.bmService.update();
    }
};
__decorate([
    (0, swagger_1.ApiOkResponse)({
        description: 'Returns the version of the BotMate server',
        type: VersionApiResult,
    }),
    (0, common_1.Get)('version'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BotMateController.prototype, "getVersion", null);
__decorate([
    (0, common_1.Post)('update'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BotMateController.prototype, "update", null);
BotMateController = __decorate([
    (0, swagger_1.ApiTags)('botmate'),
    (0, common_1.Controller)('botmate'),
    __metadata("design:paramtypes", [botmate_service_1.BotMateService,
        settings_service_1.SettingsService])
], BotMateController);
exports.BotMateController = BotMateController;
//# sourceMappingURL=botmate.controller.js.map