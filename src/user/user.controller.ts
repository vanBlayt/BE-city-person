import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { Request } from 'express';
import { User } from '../schemas/user.schema';
import { AuthGuard } from '@nestjs/passport';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @UseGuards(AuthGuard('jwt'))
  @Get('')
  async findUser(): Promise<any> {
    console.log(123123);
    const users = await this.userService.findAll();
    console.log(users);
    return this.userService.findAll();
  }

  @Post('')
  async Login(@Req() request: Request): Promise<any> {
    const { username = '', password = '' } = request.body || {};
    const users: Array<User> = await this.userService.find(username);
    if (users.length > 0) {
      const user: User = users[0];
      if (user.password === password) {
        // 登录成功
        return true;
      } else {
        // 密码错误
        return false;
      }
    }
    // 用户不存在
    return 'this is userLogin';
  }
}
