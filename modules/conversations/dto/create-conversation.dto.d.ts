import { Conversation } from '@/entities';
declare const CreateConversationDTO_base: import("@nestjs/common").Type<Omit<Conversation, "id" | "bot" | "updatedAt">>;
export declare class CreateConversationDTO extends CreateConversationDTO_base {
}
export {};
