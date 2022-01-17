import { Controller } from '@nestjs/common';
import { Crud, CrudController } from "@nestjsx/crud"
import { CompanyService } from './company.service';
import { Company } from './company.entity';

@Crud({
  model: {
    type: Company
  },
})
@Controller('company')
export class CompanyController implements CrudController<Company> {

  constructor(public service: CompanyService){}
}
