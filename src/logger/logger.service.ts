import { AppConfig } from '../config/app.config';

export class LoggerService {
  config = null;
  constructor(config: any) {
    this.config = config;
  }
  prefix = 'Logger';
  log() {
    console.log(this.config.getConfig());
    console.log(this.prefix + 'Logger');
  }
}

export function loggerFactory(config: AppConfig): LoggerService {
  return new LoggerService(config);
}

export const LOGGER_KEY = 'LOGGER_KEY';
