export declare enum FilterType {
    MESSAGES = "messages",
    SERVICE_MESSAGES = "service_messages",
    WORDS = "words",
    ADVANCED = "advanced"
}
export declare class Filter {
    id: number;
    chat_id: string;
    bot_id: string;
    type: string;
    value: any;
}
