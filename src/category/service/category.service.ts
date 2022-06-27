import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/category/model/category.entity';

@Injectable()
export class CategoryService {
   constructor(@InjectRepository(Category) private category_repository: Repository<Category>) { }

  async getOne(id: number): Promise<Category> {
    return this.category_repository.findOneBy({id: id});
  }

  async create(category: Category): Promise<Category> {
    return await this.category_repository.save(category);
  }

  async update(id: number, category: Category): Promise<UpdateResult> {
    return await this.category_repository.update(id, category);
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.category_repository.delete(id);
  }
  
}