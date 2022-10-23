import { Inject, Injectable } from '@nestjs/common';
import { UsersDto } from './users.dto';
import { StoreService } from '../store/store.service';

@Injectable()
export class UsersService {
  constructor(@Inject('STORE_SERVICE') private storeService: StoreService) {}
  create(user: UsersDto): UsersDto {
    this.storeService.save(user);
    return user;
  }
}
