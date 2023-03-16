"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserDTO = void 0;
const user_entity_1 = require("../../../entities/user.entity");
const swagger_1 = require("@nestjs/swagger");
class CreateUserDTO extends (0, swagger_1.OmitType)(user_entity_1.User, [
    'id',
    'createdAt',
    'bots',
    'role',
]) {
}
exports.CreateUserDTO = CreateUserDTO;
//# sourceMappingURL=create-user.dto.js.map