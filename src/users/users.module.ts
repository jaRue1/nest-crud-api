import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import config from '../../ormconfig'; // db config
@Module({
  imports: [TypeOrmModule.forFeature([User]),
  TypeOrmModule.forRoot(config)
],
  controllers: [UsersController],
  exports: [UsersService],
  providers: [UsersService],
})
export class UsersModule {}
