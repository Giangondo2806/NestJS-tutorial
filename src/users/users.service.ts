import { Inject, Injectable } from '@nestjs/common';
import { UsersDto } from './users.dto';
import { StoreConfig } from '../store/store.config';
import { StoreService } from './store.service';

@Injectable()
export class UsersService {
  constructor(
    @Inject('STORE_CONFIG') storeConfig: StoreConfig,
    @Inject('STORE_SERVICE') private storeService: StoreService,
  ) {}
  create(user: UsersDto): UsersDto {
    this.storeService.save(user);
    return user;
  }
}
