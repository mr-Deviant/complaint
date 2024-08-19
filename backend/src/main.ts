import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';
// import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService: ConfigService = app.get<ConfigService>(ConfigService);
  app.setGlobalPrefix('api');
  // app.useGlobalPipes(new ValidationPipe());
  await app.listen(configService.get('APP_PORT') || 80);
}
bootstrap();
