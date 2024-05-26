import { NestFactory } from '@nestjs/core';

import { ExpressAdapter } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create({}, new ExpressAdapter());

  await app.listen(3000);
}

bootstrap();
