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
exports.BotController = void 0;
const error_response_1 = require("../../common/error.response");
const bot_entity_1 = require("../../entities/bot.entity");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const bot_service_1 = require("./bot.service");
const create_bot_dto_1 = require("./dto/create-bot.dto");
const bot_process_service_1 = require("./services/bot.process.service");
const bot_restart_event_1 = require("./events/bot-restart.event");
const update_bot_dto_1 = require("./dto/update-bot.dto");
class BotStartStopResponse {
}
let BotController = class BotController {
    constructor(botService, botProcess) {
        this.botService = botService;
        this.botProcess = botProcess;
    }
    async getBots(req) {
        const user = req.user;
        const bots = await this.botService.getBotsByUserId(user.id);
        return bots;
    }
    async createBot(request, body) {
        const user = request.user;
        try {
            const bot = await this.botService.createBot(body.token, user.id);
            return bot;
        }
        catch (e) {
            throw new common_1.BadRequestException(e.message);
        }
    }
    async startBot(id) {
        try {
            await this.botProcess.startBot(id);
            return { ok: true };
        }
        catch (e) {
            throw new common_1.BadRequestException(e.message);
        }
    }
    async stopBot(id) {
        try {
            await this.botProcess.stopBot(id);
            return { ok: true };
        }
        catch (e) {
            throw new common_1.BadRequestException(e.message);
        }
    }
    async restartBot(id) {
        try {
            await this.botProcess.restartBot(new bot_restart_event_1.BotRestartEvent(id));
            return { ok: true };
        }
        catch (e) {
            throw new common_1.BadRequestException(e.message);
        }
    }
    async updateBot(id, body) {
        try {
            const bot = await this.botService.updateBot(id, body);
            return bot;
        }
        catch (e) {
            throw new common_1.BadRequestException(e.message);
        }
    }
    async deleteBot(id) {
        try {
            await this.botService.deleteBot(id);
            return { ok: true };
        }
        catch (e) {
            throw new common_1.BadRequestException(e.message);
        }
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOkResponse)({
        description: 'Get all bots',
        type: [bot_entity_1.Bot],
    }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BotController.prototype, "getBots", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOkResponse)({
        type: (0, swagger_1.OmitType)(bot_entity_1.Bot, ['user']),
    }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Unauthorized',
        type: error_response_1.ErrorResponse,
    }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_bot_dto_1.CreateBotDTO]),
    __metadata("design:returntype", Promise)
], BotController.prototype, "createBot", null);
__decorate([
    (0, common_1.Post)(':id/start'),
    (0, swagger_1.ApiOkResponse)({
        description: 'Start bot',
        type: BotStartStopResponse,
    }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Bot ID to start',
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BotController.prototype, "startBot", null);
__decorate([
    (0, common_1.Post)(':id/stop'),
    (0, swagger_1.ApiOkResponse)({
        description: 'Stop bot',
        type: BotStartStopResponse,
    }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Bot ID to stop',
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BotController.prototype, "stopBot", null);
__decorate([
    (0, common_1.Post)(':id/restart'),
    (0, swagger_1.ApiOkResponse)({
        description: 'Restart bot',
        type: BotStartStopResponse,
    }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Bot ID to restart',
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BotController.prototype, "restartBot", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOkResponse)({
        description: 'Update bot',
        type: (0, swagger_1.OmitType)(bot_entity_1.Bot, ['user']),
    }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Bot ID to update',
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_bot_dto_1.UpdateBotDTO]),
    __metadata("design:returntype", Promise)
], BotController.prototype, "updateBot", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Bot ID to delete',
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BotController.prototype, "deleteBot", null);
BotController = __decorate([
    (0, swagger_1.ApiTags)('bot'),
    (0, common_1.Controller)('bots'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [bot_service_1.BotService,
        bot_process_service_1.BotProcessService])
], BotController);
exports.BotController = BotController;
//# sourceMappingURL=bot.controller.js.map