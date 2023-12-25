import { Injectable } from '@nestjs/common';
import { DocumentType, ModelType } from '@typegoose/typegoose/lib/types';
import { InjectModel } from 'nestjs-typegoose';
import { Types } from 'mongoose';
import { ProductModel } from './product.model';
import { CreateProductDto } from './dto/product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(ProductModel)
    private readonly productModel: ModelType<ProductModel>,
  ) {}

  async create(dto: CreateProductDto): Promise<DocumentType<ProductModel>> {
    return this.productModel.create(dto);
  }

  async delete(id: string): Promise<DocumentType<ProductModel> | null> {
    return this.productModel.findByIdAndDelete(id).exec();
  }

  async findByProductId(
    productId: string,
  ): Promise<DocumentType<ProductModel>[]> {
    return this.productModel.find({ productId: new Types.ObjectId(productId) }).exec();
  }
}
