import { Social, SOCIAL_CONFIG } from '../users/social.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppConfig {
  getConfig(): Social {
    return {
      appID: 'abc123faceboook',
      token: 'abcdefToken',
    };
  }
}
