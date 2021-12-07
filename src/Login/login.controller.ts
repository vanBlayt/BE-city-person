import { Controller, Get, Param, Body, Post } from '@nestjs/common';
import { LoginService } from './login.services';
@Controller('login')
export class LoginController {
  constructor(private LoginService: LoginService) {}

  @Post()
  login(@Body() body) {
    return this.LoginService.findAll();
  }
}
