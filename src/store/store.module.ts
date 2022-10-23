import { Module } from '@nestjs/common';
import { StoreConfig } from './store.config';
import { StoreService } from '../users/store.service';

@Module({
  providers: [
    {
      provide: 'STORE_CONFIG',
      useValue: {
        dir: 'store',
        path: 'data.json',
      } as StoreConfig,
    },
    StoreService,
  ],
  exports: [StoreService],
})
export class StoreModule {}
