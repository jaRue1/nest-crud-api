import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { CompanyModule } from './company/company.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: ':memory',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
  }),
  UsersModule,
  CompanyModule],
})
export class AppModule {}
