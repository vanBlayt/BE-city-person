import { Controller, Get, Param, Body, Post } from '@nestjs/common';
import { LoginService } from './login.services';
@Controller('login')
export class LoginController {
  constructor(private LoginService: LoginService) {}

  @Post()
  async login(@Body() body) {
    const res = await this.LoginService.findAll(body);
    return res.length > 0;
  }
}
