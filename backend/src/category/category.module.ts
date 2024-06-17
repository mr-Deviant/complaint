import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoryController } from './category.controller';
import { Category, CategorySchema } from './category.schema';
import { CategoryService } from './category.service';

@Module({
  controllers: [CategoryController],
  imports: [
    MongooseModule.forFeature([
      {
        name: Category.name,
        schema: CategorySchema,
        collection: 'categories',
      },
    ]),
  ],
  providers: [CategoryService],
})
export class CategoryModule {}
