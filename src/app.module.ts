import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { CompanyModule } from './company/company.module';
import { ProductsModule } from './products/products.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: ':memory',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
  }),
  UsersModule,
  CompanyModule,
  ProductsModule],
})
export class AppModule {}
