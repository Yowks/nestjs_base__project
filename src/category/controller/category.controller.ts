import { Controller, Post, Get, Put, Delete, Param, Request, Body, UseGuards } from '@nestjs/common';
import {UpdateResult, DeleteResult} from 'typeorm';
import { CategoryService } from '../service/category.service';
import { Category } from '../model/category.entity';
import { JwtAuthGuard } from 'src/authentication/jwt-auth.guard';

@Controller('api/v1/category')
export class CategoryController {
  constructor(private category_service: CategoryService) { }

  /**
   * @returns a category created only if authentified
   * @param category  - category
   */
  @UseGuards(JwtAuthGuard)
  @Post()
  async Create(@Body() category: Category): Promise<Category> {
    return await this.category_service.create(category);
  }

  /**
   * @returns a category only if authentified
   * @param id  - category id
   */
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async GetOne(@Param('id') id: number): Promise<Category> {
    return await this.category_service.getOne(id);
  }

  /**
   * @returns an object category after being registered
   * @param id  - category id
   * @param category  - category
   */
  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async Update(@Param('id') id: number, @Body() category: Category): Promise<UpdateResult> {
    return await this.category_service.update(id, category);
  }

  /**
   * @returns delete result - done or error
   * @param id  - category id
   */
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async Delete(@Param('id') id: number): Promise<DeleteResult> {
    return await this.category_service.delete(id);
  }
}
