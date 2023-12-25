import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/product.dto';
import { ProductModel } from './product.model';
import { PRODUCT_NOT_FOUND } from './product.constants';
import { prop } from '@typegoose/typegoose';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post('create')
  async create(@Body() dto: CreateProductDto) {
    return this.productService.create({ ...dto, userId: null, photoUrls: [] });
  }

  @Get(':id')
  async get(@Param('id') id: string) {
    return this.productService.findByProductId(id);
  }

  @Patch(':id')
  async patch(@Param('id') id: string, @Body() dto: ProductModel) {
    // TODO:
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    const deletedProduct = await this.productService.delete(id);

    if (!deletedProduct) {
      throw new HttpException(PRODUCT_NOT_FOUND, HttpStatus.NOT_FOUND);
    }
  }
}
