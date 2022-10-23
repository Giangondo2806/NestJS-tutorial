import { DynamicModule, Module } from '@nestjs/common';
import { StoreService } from './store.service';
import {
  STORE_CONFIG_TOKEN,
  StoreConfig,
  StoreFeatureConfig,
  StoreRootConfig,
} from './store.config';

let rootStoreConfig: StoreConfig;

const DEFAULT_STORE_DIRNAME = 'store';
const DEFUALT_FILE_NAME = 'data.json';

@Module({
  providers: [StoreService],
  exports: [StoreService],
})
class RootStoreModule {}

@Module({})
export class StoreModule {
  static forRoot(storeConfig?: StoreRootConfig): DynamicModule {
    rootStoreConfig = StoreModule.createConfig(storeConfig);
    return {
      module: RootStoreModule,
      providers: [
        {
          provide: STORE_CONFIG_TOKEN,
          useValue: rootStoreConfig,
        },
      ],
    };
  }

  static forFeature(storeConfig: StoreFeatureConfig): DynamicModule {
    return {
      module: StoreModule,
      imports: [RootStoreModule],
      providers: [
        {
          provide: 'STORE_SERVICE',
          useFactory: () => {
            const featureStoreConfig = StoreModule.createConfig({
              ...rootStoreConfig,
              ...storeConfig,
            });
            console.log('test');
            console.log(featureStoreConfig);
            return new StoreService(featureStoreConfig);
          },
        },
      ],
      exports: ['STORE_SERVICE'],
    };
  }

  private static createConfig(config: StoreConfig): StoreConfig {
    const defaultConfig: StoreConfig = {
      dirname: DEFAULT_STORE_DIRNAME,
      filename: DEFUALT_FILE_NAME,
    };
    return Object.assign(defaultConfig, config);
  }
}
