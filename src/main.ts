import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { logger } from './middleware/logger.middleware';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 跨域
  app.enableCors();

  // 全局中间件
  app.use(logger);

  await app.listen(8080);
}
bootstrap();
