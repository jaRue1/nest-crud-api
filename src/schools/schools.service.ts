import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Schools } from './schools.entity';

@Injectable()
export class SchoolsService extends TypeOrmCrudService<Schools>{

  constructor(@InjectRepository(Schools) repo){
    super(repo)
  }
}
