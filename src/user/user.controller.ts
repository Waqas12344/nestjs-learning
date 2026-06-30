import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

// @Get('all')      Get /user/all
// @Get(':id')      Get /user/:id
// @Post()          Post /user
// @Put(':id)       PUT /user/:id
// @Delete(':id)    Delete /user/:id

@Controller('user')
export class UserController {
  // get user
  @Get()
  getUsers(@Query('name') name: string) {
    const users = [
      { id: 1, name: 'waqas' },
      { id: 2, name: 'usman' },
    ];

    if (name) {
      return users.filter((user) =>
        user.name.toLowerCase().includes(name.toLowerCase()),
      );
    }
  }

  @Get(':id')
  getUserById(@Param('id') id: string) {
    return { id, name: 'waqas' };
  }

  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    return {
      data: createUserDto,
      message: 'user created successfully',
    };
  }

   @Put()
  updateUser(@Param('id') id:string , @Body() updateUserDto: UpdateUserDto) {
    return {
      data: {id, ...updateUserDto},
      message: 'user created successfully',
    };
  }
}
