import { Injectable } from '@nestjs/common';
import { CategoryModel } from './category.model';
import { DocumentType, ModelType } from '@typegoose/typegoose/lib/types';
import { InjectModel } from 'nestjs-typegoose';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(CategoryModel)
    private readonly categoryModel: ModelType<CategoryModel>,
  ) {}

  async find(): Promise<DocumentType<CategoryModel>[]> {
    return this.categoryModel.find();
  }
}
