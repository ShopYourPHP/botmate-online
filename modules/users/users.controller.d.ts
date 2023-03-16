import { Request } from 'express';
import { UserService } from './user.service';
import { User } from '@/entities/user.entity';
export declare class UsersController {
    private readonly userService;
    constructor(userService: UserService);
    profile(req: Request): Promise<User>;
}
