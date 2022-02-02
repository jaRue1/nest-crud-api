import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyService } from './company.service';
import { CompanyController } from './company.controller';
import { Company } from './company.entity';
import config from '../../ormconfig'; // db config
@Module({
  imports: [TypeOrmModule.forFeature([Company]),
  TypeOrmModule.forRoot(config)
],
  providers: [CompanyService],
  exports: [CompanyService],
  controllers: [CompanyController]
})
export class CompanyModule {}
