import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Products } from './products.entity';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import config from '../../ormconfig'; // db config

@Module({
  imports: [TypeOrmModule.forFeature([Products]),
  TypeOrmModule.forRoot(config)
],
  providers: [ProductsService],
  exports:[ProductsService],
  controllers: [ProductsController]
})
export class ProductsModule {}
