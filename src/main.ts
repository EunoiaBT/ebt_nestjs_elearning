import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {
  // App
  const app = await NestFactory.create(AppModule);

  // CORs
  const corsOptions: CorsOptions = {
    origin: [`*`],
    credentials: true,
    methods: 'GET, HEAD, PUT, PATCH, POST, DELETE, OPTIONS',
    allowedHeaders: 'Authorization, Content-Type',
  };

  app.enableCors(corsOptions);

  // Global Prefix
  app.setGlobalPrefix('api/v1');

  // Port
  await app.listen(process.env.PORT);
}
bootstrap();
