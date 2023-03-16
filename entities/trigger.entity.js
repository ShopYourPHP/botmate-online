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
exports.Trigger = void 0;
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const trigger_types_1 = require("../common/types/trigger.types");
let Trigger = class Trigger {
};
__decorate([
    (0, swagger_1.ApiResponseProperty)(),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", String)
], Trigger.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Trigger.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: trigger_types_1.triggerModes,
    }),
    (0, typeorm_1.Column)({
        enum: trigger_types_1.triggerModes,
    }),
    __metadata("design:type", String)
], Trigger.prototype, "mode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: trigger_types_1.TriggerAction,
        isArray: true,
    }),
    (0, typeorm_1.Column)({
        type: 'jsonb',
    }),
    __metadata("design:type", Array)
], Trigger.prototype, "actions", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Array(),
    }),
    (0, typeorm_1.Column)({
        type: 'jsonb',
    }),
    __metadata("design:type", Array)
], Trigger.prototype, "conditions", void 0);
Trigger = __decorate([
    (0, typeorm_1.Entity)({ name: 'triggers' })
], Trigger);
exports.Trigger = Trigger;
//# sourceMappingURL=trigger.entity.js.map