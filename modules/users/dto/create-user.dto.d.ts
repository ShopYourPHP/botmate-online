import { User } from '@/entities/user.entity';
declare const CreateUserDTO_base: import("@nestjs/common").Type<Omit<User, "id" | "createdAt" | "bots" | "role">>;
export declare class CreateUserDTO extends CreateUserDTO_base {
}
export {};
