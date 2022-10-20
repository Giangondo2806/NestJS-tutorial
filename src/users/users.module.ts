import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersSerivce } from './users.serivce';
import { UsersMockService } from './users-mock.service';

@Module({
  controllers: [UsersController],
  providers: [
    {
      provide: UsersSerivce,
      useClass: UsersMockService,
    },
  ],
})
export class UsersModule {}
