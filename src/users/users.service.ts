import { Inject, Injectable } from '@nestjs/common';
import { UsersDto } from './users.dto';
import { StoreService } from './store.service';

@Injectable()
export class UsersService {
  constructor(private storeService: StoreService) {}
  create(user: UsersDto): UsersDto {
    this.storeService.save(user);
    return user;
  }
}
