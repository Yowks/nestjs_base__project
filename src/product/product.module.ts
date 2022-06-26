import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryModule } from 'src/category/category.module';
import { ProductController } from './controller/product.controller';
import { Product } from './model/product.entity';
import { ProductService } from './service/product.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Product]),
    CategoryModule
  ],
  controllers: [ProductController],
  providers: [ProductService]
})
export class ProductModule {}
