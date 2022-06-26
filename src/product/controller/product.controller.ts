import { Controller, Post, Get, Put, Delete, Param, Request, Body, UseGuards } from '@nestjs/common';
import {UpdateResult, DeleteResult} from 'typeorm';
import { ProductService } from '../service/product.service';
import { Product } from '../model/product.entity';
import { JwtAuthGuard } from 'src/authentication/jwt-auth.guard';

@Controller('api/v1/product')
export class ProductController {
  constructor(private product_service: ProductService) { }

  @UseGuards(JwtAuthGuard)
  @Post()
  async Create(@Body() product: Product): Promise<Product> {
    return await this.product_service.create(product);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async GetOne(@Param() id: number): Promise<Product> {
    return await this.product_service.getOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async Update(@Param() id: number, @Body() product: Product): Promise<UpdateResult> {
    return await this.product_service.update(id, product);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async Delete(@Param() id: number): Promise<DeleteResult> {
    return await this.product_service.delete(id);
  }
}
