import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PostModule } from './posts/post.module';

@Module({
  imports: [UsersModule, PostModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
