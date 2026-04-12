import { NestFactory } from '@nestjs/core';
import { AuthServiceModule } from './auth-service.module';
import { SERVICES_PORTS } from '@app/common';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AuthServiceModule);

  //Enable validation
  app.useGlobalPipes(
    new ValidationPipe({
      // this will remove unknown properties
      whitelist: true,
      // this will transform acc. to DTO
      transform: true,
      // this will not allow any unknowm properties
      forbidNonWhitelisted: true,
    }),
  );

  await app.listen(SERVICES_PORTS.AUTH_SERVICE);
  console.log(`Auth Service is running on port ${SERVICES_PORTS.AUTH_SERVICE}`);
}
bootstrap();
