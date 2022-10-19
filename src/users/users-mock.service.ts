import { UsersDto } from './users.dto';

export class UsersMockService {
  create(user: UsersDto): UsersDto {
    return {
      name: 'mock name',
      password: 'mockPassword',
      username: 'giangTB',
    };
  }
}
