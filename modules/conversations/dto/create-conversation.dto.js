"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateConversationDTO = void 0;
const entities_1 = require("../../../entities");
const swagger_1 = require("@nestjs/swagger");
class CreateConversationDTO extends (0, swagger_1.OmitType)(entities_1.Conversation, [
    'id',
    'bot',
    'updatedAt',
]) {
}
exports.CreateConversationDTO = CreateConversationDTO;
//# sourceMappingURL=create-conversation.dto.js.map