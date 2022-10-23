import { StoreService } from '../store/store.service';
import { Controller, Inject, Injectable, Post } from '@nestjs/common';

@Injectable()
export class PostService {
  constructor(
    @Inject('STORE_SERVICEpost.json') private storeService: StoreService,
  ) {}

  createPost(post: any): any {
    this.storeService.save(post);
    return post;
  }
}
