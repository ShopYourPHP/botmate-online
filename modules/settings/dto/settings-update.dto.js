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
exports.SettingsUpdateDTO = void 0;
const entities_1 = require("../../../entities");
const swagger_1 = require("@nestjs/swagger");
class SettingsUpdateDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], SettingsUpdateDTO.prototype, "key", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], SettingsUpdateDTO.prototype, "value", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: entities_1.SettingsScope,
        default: entities_1.SettingsScope.GLOBAL,
    }),
    __metadata("design:type", String)
], SettingsUpdateDTO.prototype, "scope", void 0);
exports.SettingsUpdateDTO = SettingsUpdateDTO;
//# sourceMappingURL=settings-update.dto.js.map