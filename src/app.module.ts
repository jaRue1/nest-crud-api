import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { CompanyModule } from './company/company.module';
import { ProductsModule } from './products/products.module';
import { SchoolsModule } from './schools/schools.module';
import config from '../ormconfig'; // db config

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
  UsersModule,
  CompanyModule,
  ProductsModule,
  SchoolsModule],
})
export class AppModule {}
