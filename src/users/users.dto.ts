import { Exclude } from 'class-transformer';

export class UsersDto {
  username: string;
  name: string;

  @Exclude()
  password: string;
}
