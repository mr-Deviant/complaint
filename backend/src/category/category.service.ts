import { Injectable } from '@nestjs/common';
import { Category } from './category.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class CategoryService {
  constructor(@InjectModel(Category.name) private readonly categoryModel: Model<Category>) {}

  async find(): Promise<Category[]> {
    return this.categoryModel.find();
  }
}
