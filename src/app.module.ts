import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { TestModule } from './test/test.module';
import { StoriesModule } from './stories/stories.module';
import { CommentsModule } from './comments/comments.module';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/cityPerson'),
    UserModule,
    AuthModule,
    TestModule,
    StoriesModule,
    CommentsModule,
  ],
  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {}
}
