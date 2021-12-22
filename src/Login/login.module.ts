import { Module } from '@nestjs/common';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';
import { UsersService } from '../users/users.service';

@Module({
  controllers: [LoginController],
  providers: [LoginService, UsersService],
})
export class LoginModule {}
