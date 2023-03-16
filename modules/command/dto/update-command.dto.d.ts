import { Command } from '@/entities';
declare const UpdateCommandDTO_base: import("@nestjs/common").Type<Omit<Command, "id" | "bot" | "createdAt">>;
export declare class UpdateCommandDTO extends UpdateCommandDTO_base {
}
export {};
