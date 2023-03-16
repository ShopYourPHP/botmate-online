"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BotMateModule = void 0;
const entities_1 = require("../../entities");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const settings_service_1 = require("../settings/settings.service");
const botmate_controller_1 = require("./botmate.controller");
const botmate_service_1 = require("./botmate.service");
let BotMateModule = class BotMateModule {
};
BotMateModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([entities_1.Settings])],
        controllers: [botmate_controller_1.BotMateController],
        providers: [botmate_service_1.BotMateService, settings_service_1.SettingsService],
    })
], BotMateModule);
exports.BotMateModule = BotMateModule;
//# sourceMappingURL=botmate.module.js.map