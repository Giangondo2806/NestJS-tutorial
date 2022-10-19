import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersSerivce } from './users.serivce';
import { Social, SOCIAL_CONFIG } from './social.interface';
import { LOGGER_KEY, loggerFactory } from '../logger/logger.service';
import { AppConfig } from 'src/config/app.config';
import { StoreModule } from '../store/store.module';

@Module({
  imports: [
    StoreModule.register({
      dirname: 'store',
      filename: 'user.json',
    }),
  ],
  controllers: [UsersController],
  providers: [
    UsersSerivce,
    AppConfig,
    {
      provide: LOGGER_KEY,
      useFactory: loggerFactory,
      inject: [AppConfig],
    },
  ],
})
export class UsersModule {}
