import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';

async function bootstrap() {
  const app: Promise<INestApplication> = NestFactory.create(ApplicationModule);

  app
    .then(nestInstance =>
      nestInstance.listen(3000, () => {
        console.log('Application based on Express is listening on port 3000');
      })
    )
    .catch(err => {
      console.error(
        'Application configured to listen on port 3000 failed to start',
        err
      );
    });
}
bootstrap();
