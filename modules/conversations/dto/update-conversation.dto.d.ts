import { Conversation } from '@/entities';
declare const UpdateConversationDTO_base: import("@nestjs/common").Type<Omit<Conversation, "id" | "bot" | "updatedAt">>;
export declare class UpdateConversationDTO extends UpdateConversationDTO_base {
}
export {};
