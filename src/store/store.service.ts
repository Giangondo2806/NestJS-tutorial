import { Inject } from '@nestjs/common';
import { StoreConfig } from './store.config';
import * as fs from 'fs';

export class StoreService {
  constructor(@Inject('STORE_CONFIG') private storeConfig: StoreConfig) {
    if (!fs.existsSync(storeConfig.dirname)) {
      fs.mkdirSync(storeConfig.dirname);
    }
  }

  save(data: any): void {
    fs.appendFileSync(
      `${this.storeConfig.dirname}/${this.storeConfig.filename}`,
      JSON.stringify(data),
    );
  }
}
