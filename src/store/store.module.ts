import { DynamicModule, Module } from '@nestjs/common';
import { StoreService } from './store.service';
import { StoreConfig } from './store.config';

@Module({})
export class StoreModule {
  static register(storeConfig: StoreConfig): DynamicModule {
    return {
      module: StoreModule,
      providers: [
        {
          provide: 'STORE_CONFIG',
          useValue: storeConfig,
        },
        StoreService,
      ],
      exports: [StoreService],
    };
  }
}
