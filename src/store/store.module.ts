import { DynamicModule, Module } from '@nestjs/common';
import { StoreService } from './store.service';
import {
  StoreConfig,
  StoreFeatureConfig,
  StoreRootConfig,
} from './store.config';

const STORE_CONFIG = 'STORE_CONFIG';
const DEFAULT_STORE_DIR = 'store';
const DEFAULT_FILE_NAME = 'data.json';

@Module({
  providers: [
    StoreService,
    {
      provide: STORE_CONFIG,
      useValue: {
        dirname: DEFAULT_STORE_DIR,
        filename: DEFAULT_FILE_NAME,
      },
    },
  ],
})
class RootStoreModule {}

@Module({})
export class StoreModule {
  static forRoot(storeConfig?: StoreRootConfig): DynamicModule {
    const storeConfigRoot = StoreModule.configStore(storeConfig);
    return {
      module: RootStoreModule,
      providers: [
        {
          provide: STORE_CONFIG,
          useValue: storeConfigRoot,
        },
      ],
    };
  }

  static forFeature(storeConfig?: StoreFeatureConfig): DynamicModule {
    const storeConfigFeature = StoreModule.configStore(storeConfig);
    return {
      module: StoreModule,
      imports: [RootStoreModule],
      providers: [
        {
          provide: STORE_CONFIG,
          useValue: storeConfigFeature,
        },
        {
          provide: 'STORE_SERVICE',
          useFactory: () => {
            return new StoreService(storeConfigFeature);
          },
        },
      ],
      exports: ['STORE_SERVICE'],
    };
  }

  private static configStore(storeConfig: StoreConfig): StoreConfig {
    const defaultConfig: StoreConfig = {
      dirname: DEFAULT_STORE_DIR,
      filename: DEFAULT_FILE_NAME,
    };
    return { ...defaultConfig, ...storeConfig };
  }
}
