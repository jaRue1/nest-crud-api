import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { UsersModule } from "./users/users.module"
import { CompanyModule } from "./company/company.module"
import { ProductsModule } from "./products/products.module"
import { swagger } from '@nestjsx/crud/lib/crud';
import { SchoolsModule } from './schools/schools.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api')// set a global prefix so that all endpoints follow http://localhost:4000/api/*

  const options = new DocumentBuilder()
    .setTitle('Users Api Endpoints')
    .setDescription('Users Blueprint')
    .setVersion('4.0')
    .addTag('Users')
    .build();
  const userDocument = SwaggerModule.createDocument(app, options , {include: [UsersModule]});
  SwaggerModule.setup('/users', app, userDocument);

  const secondOption = new DocumentBuilder()
    .setTitle('Company Api Endpoints')
    .setDescription('Company Blueprint')
    .setVersion('4.0')
    .addTag('Company')
    .build();
  const companyDocument = SwaggerModule.createDocument(app, secondOption, {include: [CompanyModule]});
  SwaggerModule.setup('/company', app, companyDocument);

  const thirdOption = new DocumentBuilder()
    .setTitle('Product Api Endpoints')
    .setDescription('Products Blueprint')
    .setVersion('4.0')
    .addTag('Products')
    .build();
  const productDocument = SwaggerModule.createDocument(app, thirdOption, {include: [ProductsModule]})
  SwaggerModule.setup('/products', app, productDocument)

  const fourthOption = new DocumentBuilder()
    .setTitle('School Api Endpoints')
    .setDescription('School Blueprint')
    .setVersion('4.0')
    .addTag('Schools')
    .build();
  const schoolDocument = SwaggerModule.createDocument(app, fourthOption, {include: [SchoolsModule]})
  SwaggerModule.setup('/schools', app, schoolDocument)
  await app.listen(4000);
}
bootstrap();
