import { Command } from '@/entities';
declare const CreateCommandDTO_base: import("@nestjs/common").Type<Omit<Command, "id" | "createdAt">>;
export declare class CreateCommandDTO extends CreateCommandDTO_base {
}
export {};
