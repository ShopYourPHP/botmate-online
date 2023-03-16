import { CreateUserDTO } from './dto/create-user.dto';
import { User } from '@/entities/user.entity';
import { Repository } from 'typeorm';
export declare class UserService {
    private readonly userRepo;
    constructor(userRepo: Repository<User>);
    createUser(createUserInput: CreateUserDTO): Promise<User>;
    getUserByEmail(email: string): Promise<User>;
    getUser(id: number): Promise<User>;
    getUsersCount(): Promise<number>;
    getUsers(): User[];
}
