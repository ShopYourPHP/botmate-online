"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnnouncementsModule = void 0;
const entities_1 = require("../../entities");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const ancmt_controller_1 = require("./ancmt.controller");
const ancmt_service_1 = require("./ancmt.service");
let AnnouncementsModule = class AnnouncementsModule {
};
AnnouncementsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([entities_1.Bot])],
        controllers: [ancmt_controller_1.AnnouncementsController],
        providers: [ancmt_service_1.AnnouncementsService],
    })
], AnnouncementsModule);
exports.AnnouncementsModule = AnnouncementsModule;
//# sourceMappingURL=ancmt.module.js.map