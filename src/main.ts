import { config } from 'dotenv';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

config();

const configService = new ConfigService();

async function bootstrap() {
   const app = await NestFactory.create(AppModule);
   app.useGlobalPipes(new ValidationPipe({ transform: true }));

   await app.listen(configService.get('PORT') || 3004);
   console.log('Listening in PORT ', configService.get('PORT'));
}
bootstrap();
