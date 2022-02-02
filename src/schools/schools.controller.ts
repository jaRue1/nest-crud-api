import { Controller } from '@nestjs/common';
import { Schools } from './schools.entity';
import { Crud, CrudController } from '@nestjsx/crud';
import { SchoolsService } from './schools.service';
@Crud({
  model : {
    type: Schools
  }
})
@Controller('schools')
export class SchoolsController implements CrudController<Schools> {
  
  constructor(public service: SchoolsService) {}
}
