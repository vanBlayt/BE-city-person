import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { TestModule } from './modules/test/test.module';
import { StoriesModule } from './modules/stories/stories.module';
import { CommentsModule } from './modules/comments/comments.module';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/cityPerson'),
    UserModule,
    AuthModule,
    TestModule,
    StoriesModule,
    CommentsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {}
}
