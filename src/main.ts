import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { logger } from './common/middleware/logger.middleware';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // 跨域
  app.enableCors();

  // 全局中间件
  app.use(logger);

  // 配置静态资源
  app.useStaticAssets(join(__dirname, '..', 'public'), {
    prefix: '/static/',
  });

  await app.listen(8080);
}
bootstrap();
