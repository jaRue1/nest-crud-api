import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Products } from './products.entity';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Products]),
  TypeOrmModule.forRoot({
    type: 'sqlite',
    database: ':memory',
    entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize: true,
  })
],
  providers: [ProductsService],
  exports:[ProductsService],
  controllers: [ProductsController]
})
export class ProductsModule {}
