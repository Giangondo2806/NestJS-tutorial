import { Inject, Injectable } from '@nestjs/common';
import { UsersDto } from './users.dto';
import { LOGGER_KEY, LoggerService } from '../logger/logger.service';
import { StoreService } from '../store/store.service';

@Injectable()
export class UsersSerivce {
  constructor(
    @Inject(LOGGER_KEY) private loggerService: LoggerService,
    private storeService: StoreService,
  ) {}

  create(user: UsersDto): UsersDto {
    this.storeService.save(user);
    return user;
  }
}
