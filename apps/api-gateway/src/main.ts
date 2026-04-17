import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpException, ValidationPipe } from '@nestjs/common';
import { SERVICES_PORTS } from '@app/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
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
  // app.useGlobalFilters(new HttpEx);
  await app.listen(SERVICES_PORTS.API_GATEWAY);
  console.log(`API Gateway is running on port ${SERVICES_PORTS.API_GATEWAY}`);
}
bootstrap();
