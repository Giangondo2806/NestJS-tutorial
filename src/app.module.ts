import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PostModule } from './posts/post.module';
import { StoreModule } from './store/store.module';

@Module({
  imports: [
    UsersModule,
    PostModule,
    StoreModule.forRoot({
      dirname: 'ABCD',
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
