"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCommandDTO = void 0;
const entities_1 = require("../../../entities");
const swagger_1 = require("@nestjs/swagger");
class UpdateCommandDTO extends (0, swagger_1.OmitType)(entities_1.Command, [
    'id',
    'bot',
    'createdAt',
]) {
}
exports.UpdateCommandDTO = UpdateCommandDTO;
//# sourceMappingURL=update-command.dto.js.map