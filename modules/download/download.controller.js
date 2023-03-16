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
exports.DownloadController = void 0;
const fs_1 = require("fs");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
let DownloadController = class DownloadController {
    async download(type, fileName, res) {
        const path = `data/downloads/${type}/${fileName}`;
        if ((0, fs_1.existsSync)(path)) {
            const file = (0, fs_1.createReadStream)(`data/downloads/${type}/${fileName}`);
            file.pipe(res);
        }
    }
};
__decorate([
    (0, common_1.Get)(':type/:fileName'),
    __param(0, (0, common_1.Param)('type')),
    __param(1, (0, common_1.Param)('fileName')),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], DownloadController.prototype, "download", null);
DownloadController = __decorate([
    (0, swagger_1.ApiTags)('download'),
    (0, common_1.Controller)('download')
], DownloadController);
exports.DownloadController = DownloadController;
//# sourceMappingURL=download.controller.js.map