"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const user_logger_1 = require("./user.logger");
let UserService = class UserService {
    logger;
    constructor(logger) {
        this.logger = logger;
    }
    users = [
        { id: 1, name: 'ali', email: 'ali@gmail.com' },
        { id: 2, name: 'sara', email: 'sara@gmail.com' },
    ];
    nextId = 3;
    findAllUsers(name = '') {
        this.logger.log('Finding all users');
        return this.users.filter((user) => user.name.toLowerCase().includes(name.toLowerCase()));
    }
    findUserById(id) {
        this.logger.log(`Finding user with id: ${id}`);
        const user = this.users.find((user) => user.id === id);
        if (!user) {
            throw new common_1.NotFoundException(`User with ID ${id} not found`);
        }
        return user;
    }
    createUser(createUserDto) {
        this.logger.log('Creating new user');
        const newUser = {
            id: this.nextId++,
            name: createUserDto.name,
            email: createUserDto.email || `${createUserDto.name}@gmail.com`,
        };
        this.users.push(newUser);
        return newUser;
    }
    updateUser(id, updateUserDto) {
        this.logger.log(`Updating user with id: ${id}`);
        const userIndex = this.users.findIndex((user) => user.id === id);
        if (userIndex === -1) {
            throw new common_1.NotFoundException(`User with ID ${id} not found`);
        }
        const updatedUser = {
            ...this.users[userIndex],
            ...updateUserDto,
        };
        this.users[userIndex] = updatedUser;
        return updatedUser;
    }
    deleteUser(id) {
        this.logger.log(`Deleting user with id: ${id}`);
        const userIndex = this.users.findIndex((user) => user.id === id);
        if (userIndex === -1) {
            throw new common_1.NotFoundException(`User with ID ${id} not found`);
        }
        this.users.splice(userIndex, 1);
        return { message: `User with ID ${id} deleted successfully` };
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_logger_1.LoggerService])
], UserService);
//# sourceMappingURL=user.service.js.map