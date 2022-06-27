import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryController } from './controller/category.controller';
import { Category } from './model/category.entity';
import { CategoryService } from './service/category.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([Category]),
        CategoryModule
      ],
      controllers: [CategoryController],
      providers: [CategoryService]
})
export class CategoryModule {}
