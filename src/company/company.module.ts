import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyService } from './company.service';
import { CompanyController } from './company.controller';
import { Company } from './company.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Company]),
  TypeOrmModule.forRoot({
    type: 'sqlite',
    database: ':memory',
    entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize: true,
  })
],
  providers: [CompanyService],
  exports: [CompanyService],
  controllers: [CompanyController]
})
export class CompanyModule {}
