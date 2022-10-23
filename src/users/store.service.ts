import { Inject } from '@nestjs/common';
import { StoreConfig } from '../store/store.config';
import * as fs from 'fs';

export class StoreService {
  constructor(@Inject('STORE_CONFIG') storeConfig: StoreConfig) {
    if (!fs.existsSync(storeConfig.dir)) {
      fs.mkdirSync(storeConfig.dir);
    }
  }
  save(data: any): void {
    fs.appendFileSync(`${storeConfig.dir}/${storeConfig.}`)
  }
}
