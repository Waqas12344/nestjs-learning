import { Injectable, NotFoundException } from '@nestjs/common';
import { LoggerService } from './user.logger';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

interface User {
  id: number;
  name: string;
  email: string;
}

@Injectable()
export class UserService {
  constructor(private readonly logger: LoggerService) {}
  private users: User[] = [
    { id: 1, name: 'ali', email: 'ali@gmail.com' },
    { id: 2, name: 'sara', email: 'sara@gmail.com' },
  ];
  private nextId = 3;

  findAllUsers(name: string = '') {
    this.logger.log('Finding all users');
    return this.users.filter((user) =>
      user.name.toLowerCase().includes(name.toLowerCase()),
    );
  }

  findUserById(id: number): User {
    this.logger.log(`Finding user with id: ${id}`);
    const user = this.users.find((user) => user.id === id);
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  createUser(createUserDto: CreateUserDto): User {
    this.logger.log('Creating new user');
    const newUser: User = {
      id: this.nextId++,
      name: createUserDto.name,
      email: createUserDto.email || `${createUserDto.name}@gmail.com`,
    };
    this.users.push(newUser);
    return newUser;
  }

  updateUser(id: number, updateUserDto: UpdateUserDto): User {
    this.logger.log(`Updating user with id: ${id}`);
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex === -1) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    const updatedUser = {
      ...this.users[userIndex],
      ...updateUserDto,
    };
    this.users[userIndex] = updatedUser;
    return updatedUser;
  }

  deleteUser(id: number): { message: string } {
    this.logger.log(`Deleting user with id: ${id}`);
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex === -1) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    this.users.splice(userIndex, 1);
    return { message: `User with ID ${id} deleted successfully` };
  }
}
