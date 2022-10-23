import { Module } from '@nestjs/common';
import { StoreModule } from '../store/store.module';
import { PostController } from './post.controller';
import { PostService } from './post.service';

@Module({
  imports: [
    StoreModule.forFeature({
      filename: 'post.json',
    }),
  ],
  controllers: [PostController],
  providers: [PostService],
})
export class PostModule {}
