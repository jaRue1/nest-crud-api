import { Controller , Get, Post, Put, Patch , Delete} from '@nestjs/common';

@Controller('users')
export class UsersController {

  @Get()
  getUsers(){
    return "this is users"
  }
}
