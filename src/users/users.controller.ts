import { Body, Controller, Inject, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersDto } from './users.dto';
import { plainToInstance } from 'class-transformer';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post()
  createUser(@Body() user: UsersDto): UsersDto {
    return plainToInstance(UsersDto, this.userService.create(user));
  }
}
