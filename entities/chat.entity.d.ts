import { Bot } from './bot.entity';
export declare enum ChatType {
    PRIVATE = "private",
    GROUP = "group",
    SUPERGROUP = "supergroup",
    CHANNEL = "channel"
}
export declare class Chat {
    id: string;
    chat_id: string;
    type: string;
    username: string;
    title: string;
    first_name: string;
    last_name: string;
    bot: Bot;
}
