import { Request } from 'express';
import { AuthService } from './auth.service';
import { UserService } from '@modules/users/user.service';
import { LoginUserDTO } from './dto/login-user-dto';
import { User } from '@/entities/user.entity';
import { CreateUserDTO } from '../users/dto/create-user.dto';
declare class LoginApiResponse {
    accessToken: string;
    user: User;
}
export declare class AuthController {
    private readonly authService;
    private readonly userService;
    constructor(authService: AuthService, userService: UserService);
    login(req: Request, _body: LoginUserDTO): {
        accessToken: string;
        user: User;
    };
    register(body: CreateUserDTO): Promise<LoginApiResponse>;
}
export {};
