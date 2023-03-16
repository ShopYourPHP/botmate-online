import { Conversation } from '@/entities';
import { CreateConversationDTO } from './dto/create-conversation.dto';
import { ConversationsService } from './conversations.service';
import { UpdateConversationDTO } from './dto/update-conversation.dto';
export declare class ConversationsController {
    private readonly cnvService;
    constructor(cnvService: ConversationsService);
    findConversations(botId: string): Promise<Conversation[]>;
    findConversation(id: number): Promise<Conversation>;
    createConversation(botId: string, body: CreateConversationDTO): Promise<Conversation>;
    updateConversation(id: number, body: UpdateConversationDTO): Promise<Conversation>;
}
