import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { StoreConfig } from '../store/store.config';
import { StoreService } from './store.service';
function createStore(config: StoreConfig): StoreService {
  console.log(config);
  return new StoreService();
}

@Module({
  controllers: [UsersController],
  providers: [
    UsersService,
    {
      provide: 'STORE_CONFIG',
      useValue: {
        dir: 'store',
        path: 'user',
      } as StoreConfig,
    },
    {
      provide: 'STORE_SERVICE',
      useFactory: createStore,
      inject: [
        {
          token: 'STORE_CONFIG',
          optional: true,
        },
      ],
    },
  ],
})
export class UsersModule {}
