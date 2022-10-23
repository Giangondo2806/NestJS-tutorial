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
    const token = 'STORE_SERVICE' + storeConfig.filename;
    return {
      module: StoreModule,
      providers: [
        {
          provide: token,
          useFactory: () => {
            const storeOption = StoreModule.buildStoreOptions({
              ...rootStoreOption,
              ...storeConfig,
            });
            return new StoreService(storeOption);
          },
        },
      ],
      exports: [token],
    };
  }

  private static buildStoreOptions(storeOptions: StoreConfig) {
    return Object.assign(
      {
        dirname: DEFAULT_STORE_DIR,
        filename: DEFAULT_FILE_NAME,
      },
      storeOptions,
    );
  }
}
