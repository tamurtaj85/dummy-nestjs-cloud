import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const port = process.env.PORT || 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  await app.listen(port, '0.0.0.0');

  const appUrl = await app.getUrl();

  console.log(`Server available at ${appUrl}`);
}

bootstrap();
