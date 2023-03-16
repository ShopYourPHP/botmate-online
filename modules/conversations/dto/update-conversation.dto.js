"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateConversationDTO = void 0;
const entities_1 = require("../../../entities");
const swagger_1 = require("@nestjs/swagger");
class UpdateConversationDTO extends (0, swagger_1.OmitType)(entities_1.Conversation, [
    'id',
    'bot',
    'updatedAt',
]) {
}
exports.UpdateConversationDTO = UpdateConversationDTO;
//# sourceMappingURL=update-conversation.dto.js.map