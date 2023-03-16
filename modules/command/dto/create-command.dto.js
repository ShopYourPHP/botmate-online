"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCommandDTO = void 0;
const entities_1 = require("../../../entities");
const swagger_1 = require("@nestjs/swagger");
class CreateCommandDTO extends (0, swagger_1.OmitType)(entities_1.Command, ['id', 'createdAt']) {
}
exports.CreateCommandDTO = CreateCommandDTO;
//# sourceMappingURL=create-command.dto.js.map