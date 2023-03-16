"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTriggerDto = void 0;
const trigger_entity_1 = require("../../../entities/trigger.entity");
const swagger_1 = require("@nestjs/swagger");
class CreateTriggerDto extends (0, swagger_1.OmitType)(trigger_entity_1.Trigger, ['id']) {
}
exports.CreateTriggerDto = CreateTriggerDto;
//# sourceMappingURL=create-trigger.dto.js.map