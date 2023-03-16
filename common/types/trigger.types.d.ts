export declare const triggerModes: readonly ["all", "replies", "replies-to-bot"];
export declare enum TriggerMode {
    ALL = "all",
    REPLIES = "replies",
    REPLIES_TO_BOT = "replies-to-bot"
}
export declare enum TriggerMatchType {
    FULL_MATCH = "full-match",
    PARTIAL = "partial",
    STARTS_WITH = "starts-with",
    REGEX = "regex"
}
export declare enum TriggerActionType {
    SEND_MESSAGE = "send-message",
    BAN = "ban",
    KICK = "kick",
    MUTE = "mute",
    UNRESTRICT = "unrestrict",
    DELETE = "delete",
    WARN = "warn",
    SCRIPT = "script"
}
export declare enum TriggerConditionType {
    TEXT = "text",
    PHOTO = "photo",
    STICKER = "sticker",
    REGEX = "regex"
}
export type TriggerCondition = {
    type: TriggerConditionType;
    matchType: TriggerMatchType;
    value: string;
};
export declare class TriggerAction {
    type: string;
    value: string;
    mute_duration?: string;
    ban_duration?: string;
    warn_count?: number;
}
export type Trigger = {
    name: string;
    mode: TriggerMode;
    actions: TriggerAction[];
    conditions: TriggerCondition[];
};
