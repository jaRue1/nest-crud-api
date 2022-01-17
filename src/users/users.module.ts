import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [TypeOrmModule.forFeature([User]),
  TypeOrmModule.forRoot({
    type: 'sqlite',
    database: ':memory',
    entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize: true,
  })
],
  controllers: [UsersController],
  exports: [UsersService],
  providers: [UsersService],
})
export class UsersModule {}
