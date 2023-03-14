import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { Config } from '@core/config';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app
    .useGlobalPipes(new ValidationPipe())
    // TODO setup cors for client url (use Config.get.clientURL)
    .enableCors({ origin: '*' });

  // Swagger
  const { url, title } = Config.get.swaggerOptions;
  const config = new DocumentBuilder().setTitle(title).build();
  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup(url, app, document);

  await app.listen(Config.get.port);
}

bootstrap();
