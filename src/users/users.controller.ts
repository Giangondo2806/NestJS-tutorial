import { Body, Controller, Inject, Post } from '@nestjs/common';
import { UsersSerivce } from './users.serivce';
import { UsersDto } from './users.dto';
import { plainToInstance } from 'class-transformer';
import { Social, SOCIAL_CONFIG } from './social.interface';
import { LOGGER_KEY, LoggerService } from '../logger/logger.service';

interface LoginPram {
  username: string;
  password: string;
  loginType: string;
}

@Controller('users')
export class UsersController {
  constructor(
    private readonly userService: UsersSerivce,
    @Inject(LOGGER_KEY) loggerService: LoggerService,
  ) {}

  @Post()
  createUser(@Body() user: UsersDto): UsersDto {
    return plainToInstance(UsersDto, this.userService.create(user));
  }
}
