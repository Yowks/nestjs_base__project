import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/product/model/product.entity';
import { User } from 'src/authentication/model/user.entity';

@Injectable()
export class ProductService {
   constructor(@InjectRepository(Product) private product_repository: Repository<Product>) { }

  async getOne(id: number): Promise<Product> {
    return this.product_repository.findOneBy({id: id, visible_authenticated: 1});
  }

  async create(product: Product): Promise<Product> {
    return await this.product_repository.save(product);
  }

  async update(id: number, product: Product): Promise<UpdateResult> {
    return await this.product_repository.update(id, product);
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.product_repository.delete(id);
  }
  
}