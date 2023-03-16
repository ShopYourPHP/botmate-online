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
exports.CommandController = void 0;
const entities_1 = require("../../entities");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const command_service_1 = require("./command.service");
const create_command_dto_1 = require("./dto/create-command.dto");
const update_command_dto_1 = require("./dto/update-command.dto");
class CommandGetApiResponse extends (0, swagger_1.OmitType)(entities_1.Command, ['bot']) {
}
let CommandController = class CommandController {
    constructor(cmdService) {
        this.cmdService = cmdService;
    }
    async getCommands(botId) {
        return this.cmdService.getCommandsByBotId(botId);
    }
    async createCommand(commandData) {
        try {
            const newCmd = await this.cmdService.createCommand(commandData);
            return newCmd;
        }
        catch (e) {
            throw new common_1.BadRequestException('An error occurred while creating the command.');
        }
    }
    async getCommandById(id) {
        return this.cmdService.getCommandById(id);
    }
    async updateCommand(id, commandData) {
        try {
            const updatedCmd = await this.cmdService.updateCommand(id, commandData);
            return updatedCmd;
        }
        catch (e) {
            throw new common_1.BadRequestException('An error occurred while updating the command.');
        }
    }
};
__decorate([
    (0, swagger_1.ApiOkResponse)({
        type: [CommandGetApiResponse],
    }),
    (0, swagger_1.ApiQuery)({
        name: 'botId',
        required: true,
    }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('botId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CommandController.prototype, "getCommands", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        type: entities_1.Command,
    }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_command_dto_1.CreateCommandDTO]),
    __metadata("design:returntype", Promise)
], CommandController.prototype, "createCommand", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        type: entities_1.Command,
    }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CommandController.prototype, "getCommandById", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        type: entities_1.Command,
    }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        required: true,
    }),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_command_dto_1.UpdateCommandDTO]),
    __metadata("design:returntype", Promise)
], CommandController.prototype, "updateCommand", null);
CommandController = __decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiTags)('command'),
    (0, common_1.Controller)('/commands'),
    __metadata("design:paramtypes", [command_service_1.CommandService])
], CommandController);
exports.CommandController = CommandController;
//# sourceMappingURL=command.controller.js.map