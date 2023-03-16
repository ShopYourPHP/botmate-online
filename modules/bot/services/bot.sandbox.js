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
var BotSandbox_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BotSandbox = void 0;
const common_1 = require("../../../common");
const storage_service_1 = require("../../storage/storage.service");
const common_2 = require("@nestjs/common");
const axios_1 = require("axios");
let BotSandbox = BotSandbox_1 = class BotSandbox {
    constructor(storageService) {
        this.storageService = storageService;
        this.logger = new common_1.BotMateLogger(BotSandbox_1.name);
    }
    getSandbox(botId, Ctx) {
        return {
            Ctx,
            Axios: axios_1.default,
            Storage: {
                get: async (key, defaultValue) => {
                    this.logger.debug(`getting storage key: ${key}`);
                    return this.storageService.get(key, defaultValue);
                },
                set: async (key, value) => {
                    this.logger.debug(`setting storage key: ${key}`);
                    return this.storageService.set(key, value);
                },
            },
        };
    }
};
BotSandbox = BotSandbox_1 = __decorate([
    (0, common_2.Injectable)(),
    __metadata("design:paramtypes", [storage_service_1.StorageService])
], BotSandbox);
exports.BotSandbox = BotSandbox;
//# sourceMappingURL=bot.sandbox.js.map