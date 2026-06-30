import { LoggerService } from './user.logger';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
interface User {
    id: number;
    name: string;
    email: string;
}
export declare class UserService {
    private readonly logger;
    constructor(logger: LoggerService);
    private users;
    private nextId;
    findAllUsers(name?: string): User[];
    findUserById(id: number): User;
    createUser(createUserDto: CreateUserDto): User;
    updateUser(id: number, updateUserDto: UpdateUserDto): User;
    deleteUser(id: number): {
        message: string;
    };
}
export {};
