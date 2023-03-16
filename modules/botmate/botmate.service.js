"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BotMateService = void 0;
const common_1 = require("@nestjs/common");
const fs_1 = require("fs");
const path = require("path");
let BotMateService = class BotMateService {
    async getVersion() {
        let version = '0.0.0';
        const packagePath = path.join(__dirname, '../..', 'package.json');
        if ((0, fs_1.existsSync)(packagePath)) {
            const packageJson = JSON.parse((0, fs_1.readFileSync)(packagePath, 'utf8'));
            version = packageJson.version;
        }
        return version;
    }
    update() {
        return 'Updating BotMate';
    }
};
BotMateService = __decorate([
    (0, common_1.Injectable)()
], BotMateService);
exports.BotMateService = BotMateService;
//# sourceMappingURL=botmate.service.js.map