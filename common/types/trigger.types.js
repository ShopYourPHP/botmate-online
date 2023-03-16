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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TriggerAction = exports.TriggerConditionType = exports.TriggerActionType = exports.TriggerMatchType = exports.TriggerMode = exports.triggerModes = void 0;
const swagger_1 = require("@nestjs/swagger");
exports.triggerModes = ['all', 'replies', 'replies-to-bot'];
var TriggerMode;
(function (TriggerMode) {
    TriggerMode["ALL"] = "all";
    TriggerMode["REPLIES"] = "replies";
    TriggerMode["REPLIES_TO_BOT"] = "replies-to-bot";
})(TriggerMode = exports.TriggerMode || (exports.TriggerMode = {}));
var TriggerMatchType;
(function (TriggerMatchType) {
    TriggerMatchType["FULL_MATCH"] = "full-match";
    TriggerMatchType["PARTIAL"] = "partial";
    TriggerMatchType["STARTS_WITH"] = "starts-with";
    TriggerMatchType["REGEX"] = "regex";
})(TriggerMatchType = exports.TriggerMatchType || (exports.TriggerMatchType = {}));
var TriggerActionType;
(function (TriggerActionType) {
    TriggerActionType["SEND_MESSAGE"] = "send-message";
    TriggerActionType["BAN"] = "ban";
    TriggerActionType["KICK"] = "kick";
    TriggerActionType["MUTE"] = "mute";
    TriggerActionType["UNRESTRICT"] = "unrestrict";
    TriggerActionType["DELETE"] = "delete";
    TriggerActionType["WARN"] = "warn";
    TriggerActionType["SCRIPT"] = "script";
})(TriggerActionType = exports.TriggerActionType || (exports.TriggerActionType = {}));
var TriggerConditionType;
(function (TriggerConditionType) {
    TriggerConditionType["TEXT"] = "text";
    TriggerConditionType["PHOTO"] = "photo";
    TriggerConditionType["STICKER"] = "sticker";
    TriggerConditionType["REGEX"] = "regex";
})(TriggerConditionType = exports.TriggerConditionType || (exports.TriggerConditionType = {}));
class TriggerAction {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: TriggerActionType,
    }),
    __metadata("design:type", String)
], TriggerAction.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], TriggerAction.prototype, "value", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], TriggerAction.prototype, "mute_duration", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], TriggerAction.prototype, "ban_duration", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], TriggerAction.prototype, "warn_count", void 0);
exports.TriggerAction = TriggerAction;
//# sourceMappingURL=trigger.types.js.map