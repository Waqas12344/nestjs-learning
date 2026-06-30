import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getUsers(name: string): unknown;
    getUserById(id: number): unknown;
    createUser(createUserDto: CreateUserDto): unknown;
    updateUser(id: number, updateUserDto: UpdateUserDto): unknown;
    deleteUser(id: number): {
        message: string;
    };
}
