import { Conversation } from '@/entities';
import { Repository } from 'typeorm';
import { CreateConversationDTO } from './dto/create-conversation.dto';
export declare class ConversationsService {
    private readonly cnvRepo;
    constructor(cnvRepo: Repository<Conversation>);
    getConversationsById(id: number): Promise<Conversation>;
    getConversationsByBotId(botId: string): Promise<Conversation[]>;
    createConversation(botId: string, data: CreateConversationDTO): Promise<Conversation>;
    updateConversation(id: number, data: CreateConversationDTO): Promise<Conversation>;
    deleteConversation(id: number): Promise<Conversation>;
}
