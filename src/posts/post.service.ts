import { StoreService } from '../store/store.service';
import { Controller, Injectable, Post } from '@nestjs/common';

@Injectable()
export class PostService {
  constructor(private storeService: StoreService) {}

  createPost(post: any): any {
    this.storeService.save(post);
    return post;
  }
}
