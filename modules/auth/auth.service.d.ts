import { JwtService } from '@nestjs/jwt';
import { UserService } from '@modules/users/user.service';
import { User } from '@/entities/user.entity';
export declare class AuthService {
    private readonly userService;
    private readonly jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    validate(email: string, password: string): Promise<User>;
    login(user: User): {
        accessToken: string;
        user: User;
    };
    sign(data: any): string;
    verify(token: string): Promise<any>;
}
