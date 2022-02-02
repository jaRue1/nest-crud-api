import { Module } from '@nestjs/common';
import { SchoolsService } from './schools.service';
import { SchoolsController } from './schools.controller'
import { TypeOrmModule } from '@nestjs/typeorm';
import { Schools } from './schools.entity';
import config from '../../ormconfig'; // db config
@Module({
  imports: [TypeOrmModule.forFeature([Schools]),
  TypeOrmModule.forRoot(config)
],
  providers: [SchoolsService],
  controllers: [SchoolsController]
})
export class SchoolsModule {}
