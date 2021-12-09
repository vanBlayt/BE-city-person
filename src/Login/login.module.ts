import { Module } from '@nestjs/common';
import { LoginController } from './login.controller';
import { UserSchema, User } from 'src/schemas/user.schema';
import { LoginService } from './login.services';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [LoginController],
  providers: [LoginService],
})
export class LoginModule {}
