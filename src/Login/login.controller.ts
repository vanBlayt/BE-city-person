import { Controller, Get, Param, Body, Post } from '@nestjs/common';
import { LoginService } from './login.service';
import { UsersService } from '../users/users.service';
@Controller('login')
export class LoginController {
  constructor(private UsersService: UsersService) {}

  // @Post()
  // async login(@Body() body) {
  //   const res = await this.UsersService.findOne(body);
  //   return res.length > 0;
  // }
}
