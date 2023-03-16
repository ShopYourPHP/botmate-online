"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetBotsDTO = void 0;
const bot_entity_1 = require("../../../entities/bot.entity");
const swagger_1 = require("@nestjs/swagger");
class GetBotsDTO extends (0, swagger_1.OmitType)(bot_entity_1.Bot, ['user']) {
}
exports.GetBotsDTO = GetBotsDTO;
//# sourceMappingURL=get-bots.dto.js.map