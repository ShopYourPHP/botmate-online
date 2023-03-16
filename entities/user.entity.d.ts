import { Bot } from './bot.entity';
export declare enum UserRole {
    ADMIN = "admin",
    USER = "user"
}
export declare class User {
    id: number;
    name: string;
    email: string;
    password: string;
    avatar: string;
    role: UserRole;
    createdAt: string;
    bots: Bot[];
}
