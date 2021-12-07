import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { LoginModule } from './Login/login.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://1.15.128.47:27017/cityPerson', {
      useNewUrlParser: true,
    }),
    LoginModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
