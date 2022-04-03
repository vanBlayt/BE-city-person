import {
  Controller,
  Post,
  Request,
  UseGuards,
  HttpCode,
  Get,
} from '@nestjs/common';
import { User } from 'src/common/schemas/user.schema';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { TokenEntity } from './token.entity';
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @UseGuards(AuthGuard('local'))
  @Post('/login')
  @HttpCode(200)
  async login(@Request() request): Promise<TokenEntity> {
    return this.authService.login(request.user);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('checkToken')
  async checkToken(@Request() request): Promise<boolean> {
    return true;
  }
}
