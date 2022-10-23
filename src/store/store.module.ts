import { DynamicModule, Module } from '@nestjs/common';
import { StoreService } from './store.service';
import {
  StoreConfig,
  StoreFeatureConfig,
  StoreRootConfig,
} from './store.config';

let rootStoreOption: StoreConfig;
const STORE_CONFIG = 'STORE_CONFIG';
const DEFAULT_STORE_DIR = 'store';
const DEFAULT_FILE_NAME = 'data.json';

@Module({
  providers: [StoreService],
  exports: [StoreService],
})
class RootStoreModule {}

@Module({})
export class StoreModule {
  static forRoot(storeConfig?: StoreRootConfig): DynamicModule {
    rootStoreOption = StoreModule.buildStoreOptions(storeConfig);
    return {
      module: RootStoreModule,
      providers: [
        {
          provide: STORE_CONFIG,
          useValue: rootStoreOption,
        },
      ],
    };
  }

  static forFeature(storeConfig?: StoreFeatureConfig): DynamicModule {
    return {
      module: StoreModule,
      imports: [RootStoreModule],
      providers: [
        {
          provide: 'STORE_SERVICE',
          useFactory: () => {
            const storeOption = StoreModule.buildStoreOptions({
              ...rootStoreOption,
              ...storeConfig,
            });
            return new StoreService(storeOption);
          },
        },
      ],
      exports: ['STORE_SERVICE'],
    };
  }

  private static buildStoreOptions(storeOptions: StoreConfig) {
    return Object.assign(
      {
        dirname: DEFAULT_STORE_DIR,
        fileName: DEFAULT_FILE_NAME,
      },
      storeOptions,
    );
  }
}
