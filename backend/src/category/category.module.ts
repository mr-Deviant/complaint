import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { CategoryController } from './category.controller';
import { CategoryModel } from './category.model';
import { CategoryService } from './category.service';

@Module({
  controllers: [CategoryController],
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: CategoryModel,
        schemaOptions: {
          collection: 'categories',
        },
      },
    ]),
  ],
  providers: [CategoryService],
})
export class CategoryModule {}
