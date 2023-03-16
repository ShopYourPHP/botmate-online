import { Chat, ChatType } from '@/entities/chat.entity';
import { Repository } from 'typeorm';
export declare class ChatService {
    private readonly chatRepository;
    constructor(chatRepository: Repository<Chat>);
    getBotChats(botId: string, type: ChatType): Promise<Chat[]>;
}
