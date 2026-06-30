import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';

// @Get()           Get /user
// @Get(':id')      Get /user/:id
// @Post()          Post /user
// @Put(':id')      PUT /user/:id
// @Delete(':id')   Delete /user/:id

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // Get all users with optional name filter
  @Get()
  getUsers(@Query('name') name: string):unknown {
    return this.userService.findAllUsers(name);
  }

  // Get user by ID
  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number):unknown {
    return this.userService.findUserById(id);
  }

  // Create new user
  @Post()
  createUser(@Body() createUserDto: CreateUserDto):unknown {
    return this.userService.createUser(createUserDto);
  }

  // Update user by ID
  @Put(':id')
  updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto,
  ):unknown {
    return this.userService.updateUser(id, updateUserDto);
  }

  // Delete user by ID
  @Delete(':id')
  deleteUser(@Param('id', ParseIntPipe) id: number) {
    return this.userService.deleteUser(id);
  }
}
