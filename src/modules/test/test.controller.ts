import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('test')
@UseGuards(AuthGuard('jwt'))
export class TestController {
  @Get()
  getHello(): string {
    return 'this is test';
  }
}
