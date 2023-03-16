export declare enum SettingsScope {
    GLOBAL = "global",
    BOT = "bot",
    CHAT = "chat",
    USER = "user"
}
export declare class Settings {
    id: string;
    key: string;
    scope: string;
    value: any;
}
