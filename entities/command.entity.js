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
exports.Command = void 0;
const command_types_1 = require("../common/command.types");
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const bot_entity_1 = require("./bot.entity");
let Command = class Command {
};
__decorate([
    (0, swagger_1.ApiResponseProperty)(),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Command.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Command.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], Command.prototype, "command", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ default: '' }),
    __metadata("design:type", String)
], Command.prototype, "script", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: false }),
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], Command.prototype, "enabled", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: false }),
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], Command.prototype, "privateCommand", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: false, type: () => [command_types_1.CommandProp] }),
    (0, typeorm_1.Column)({ default: [], type: 'json' }),
    __metadata("design:type", Array)
], Command.prototype, "props", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
    }),
    (0, typeorm_1.ManyToOne)(() => bot_entity_1.Bot, (bot) => bot.commands, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", bot_entity_1.Bot)
], Command.prototype, "bot", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Command.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ default: new Date().toISOString() }),
    __metadata("design:type", String)
], Command.prototype, "updatedAt", void 0);
Command = __decorate([
    (0, typeorm_1.Entity)({ name: 'commands' })
], Command);
exports.Command = Command;
//# sourceMappingURL=command.entity.js.map