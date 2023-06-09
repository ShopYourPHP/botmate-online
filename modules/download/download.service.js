"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DownloadService = void 0;
const fs_1 = require("fs");
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
let DownloadService = class DownloadService {
    async download(url, type, fileName, overwrite) {
        (0, fs_1.mkdirSync)(`data/downloads/${type}`, {
            recursive: true,
        });
        const downloadPath = `data/downloads/${type}/${fileName}`;
        if ((0, fs_1.existsSync)(downloadPath) && !overwrite)
            return;
        const writer = (0, fs_1.createWriteStream)(downloadPath);
        axios_1.default
            .get(url, {
            responseType: 'stream',
        })
            .then((response) => {
            response.data.pipe(writer);
        });
    }
};
DownloadService = __decorate([
    (0, common_1.Injectable)()
], DownloadService);
exports.DownloadService = DownloadService;
//# sourceMappingURL=download.service.js.map