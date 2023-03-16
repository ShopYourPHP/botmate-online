import { BotStatus } from '@/common/bot.types';
import { Chat } from './chat.entity';
import { Command } from './command.entity';
import { Conversation } from './conversation.entity';
import { User } from './user.entity';
export declare class Bot {
    id: string;
    first_name: string;
    username: string;
    token: string;
    avatar: string;
    status: BotStatus;
    created_at: string;
    user: User;
    commands: Command[];
    chats: Chat[];
    conversations: Conversation[];
}
