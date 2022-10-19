import { DynamicModule, Module } from '@nestjs/common';
import { StoreService } from './store.service';

export interface StoreConfig {
  dirname: string;
  filename: string;
}

@Module({})
export class StoreModule {
  static register(config: StoreConfig): DynamicModule {
    return {
      module: StoreModule,
      providers: [
        StoreService,
        {
          provide: 'STORE_CONFIG',
          useValue: config,
        },
      ],
      exports: [StoreService],
    };
  }
}
