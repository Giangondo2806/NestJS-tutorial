import { Inject, Injectable } from '@nestjs/common';
import { UsersDto } from './users.dto';

@Injectable()
export class UsersSerivce {
  create(user: UsersDto): UsersDto {
    return user;
  }
}
