import { Chat, ChatType } from '@/entities/chat.entity';
import { ChatService } from './chat.service';
export declare class ChatController {
    private chatService;
    constructor(chatService: ChatService);
    getBotChats(botId: string, type: ChatType): Promise<Chat[]>;
}
