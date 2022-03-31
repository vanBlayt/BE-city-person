import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { User } from 'src/schemas/user.schema';
import { JwtService } from '@nestjs/jwt';
import { TokenEntity } from './token.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}
  async validate(username, password): Promise<User> {
    const users: Array<User> = await this.userService.find(username);
    if (users.length > 0) {
      const user: User = users[0];
      if (user.password === password) {
        // 登录成功
        return user;
      } else {
        // 密码错误
        return null;
      }
    }
    // 用户不存在
    return null;
  }

  async login(user: User): Promise<TokenEntity> {
    const { id, username } = user;
    return {
      token: this.jwtService.sign({ username, sub: id }),
    };
  }
}
