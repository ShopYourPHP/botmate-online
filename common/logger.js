"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BotMateLogger = void 0;
const common_1 = require("@nestjs/common");
class BotMateLogger extends common_1.ConsoleLogger {
    error(message, stack, context) {
        super.error(message, stack, context);
    }
}
exports.BotMateLogger = BotMateLogger;
//# sourceMappingURL=logger.js.map