import { Body, Controller, Get, Param, Patch, Post, Delete  } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { UserDto } from '../dto/user.dto';

import { User } from '../schemas/user.schema';
import { UsersService } from '../services/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Get(':id')
  async getUser(@Param('id') id: string): Promise<User> {
    return this.usersService.getUserById(id);
  }

  @Get()
  async getUsers(): Promise<UserDto[]> {

  //   var dtos: UserDto[] = [];

  //  await this.usersService.getUsers().then(users => {
  //     //console.log(users); 
  //     users.map(user => new UserDto(user.email, user.name, user.phone)).forEach(user => {
  //       dtos.push(Object.assign({}, user))
  //       console.log(user, dtos);

  //     });
  //   });
  //   //console.log(dtos);
  //   return dtos;
    return this.usersService.getUsers();
  }

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.createUser(createUserDto.email, createUserDto.name, createUserDto.phone, createUserDto.address)
  }

  @Patch(':id')
  async updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto): Promise<User> {
    return this.usersService.updateUser(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
