import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { UsersModule } from "./users/users.module"
import { CompanyModule} from "./company/company.module"

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api')// set a global prefix so that all endpoints follow http://localhost:4000/api/*

  const options = new DocumentBuilder()
    .setTitle('Users Api Endpoints')
    .setDescription('Blueprint for crud Api')
    .setVersion('2.0')
    .addTag('Users')
    .build();
  const userDocument = SwaggerModule.createDocument(app, options , {include: [UsersModule]});
  SwaggerModule.setup('/users', app, userDocument);

  const secondOption = new DocumentBuilder()
    .setTitle('Company Api Endpoints')
    .setDescription('Blueprint for crud Api')
    .setVersion('2.0')
    .addTag('Company')
    .build();
  const companyDocument = SwaggerModule.createDocument(app, secondOption, {include: [CompanyModule]});
  SwaggerModule.setup('/company', app, companyDocument);

  await app.listen(4000);
}
bootstrap();
