import { Body, Controller, Inject, Post } from '@nestjs/common';
import { UsersSerivce } from './users.serivce';
import { UsersDto } from './users.dto';
import { plainToInstance } from 'class-transformer';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersSerivce) {}

  @Post()
  createUser(@Body() user: UsersDto): UsersDto {
    console.log('abc');
    return plainToInstance(UsersDto, this.userService.create(user));
  }
}
