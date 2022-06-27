import { Controller, Post, Get, Put, Delete, Param, Request, Body, UseGuards } from '@nestjs/common';
import {UpdateResult, DeleteResult} from 'typeorm';
import { ProductService } from '../service/product.service';
import { Product } from '../model/product.entity';
import { JwtAuthGuard } from 'src/authentication/jwt-auth.guard';

@Controller('api/v1/product')
export class ProductController {
  constructor(private product_service: ProductService) { }

  /**
   * @returns a product created only if authentified
   * @param product  - product
   */
  @UseGuards(JwtAuthGuard)
  @Post()
  async Create(@Body() product: Product): Promise<Product> {
    return await this.product_service.create(product);
  }

  /**
   * @returns a product only if authentified
   * @param id  - product id
   */
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async GetOne(@Param() id: number): Promise<Product> {
    return await this.product_service.getOne(id);
  }

  /**
   * @returns an object product after being registered
   * @param id  - product id
   * @param product  - product
   */
  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async Update(@Param() id: number, @Body() product: Product): Promise<UpdateResult> {
    return await this.product_service.update(id, product);
  }

  /**
   * @returns delete result - done or error
   * @param id  - product id
   */
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async Delete(@Param() id: number): Promise<DeleteResult> {
    return await this.product_service.delete(id);
  }
}
