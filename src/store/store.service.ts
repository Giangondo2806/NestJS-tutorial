import { Inject, Injectable, Module } from '@nestjs/common';
import { StoreConfig } from './store.module';
import * as fs from 'fs';
@Injectable()
export class StoreService {
  constructor(
    @Inject('STORE_CONFIG') private readonly storeConfig: StoreConfig,
  ) {
    if (!fs.existsSync(this.storeConfig.dirname)) {
      fs.mkdirSync(this.storeConfig.dirname);
    }
  }
  save(data: any): void {
    fs.appendFileSync(
      `${this.storeConfig.dirname}/${this.storeConfig.filename}`,
      JSON.stringify(data),
    );
  }
}
