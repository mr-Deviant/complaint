import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export class CategoryItem {
  @Prop()
  name: string;
}

@Schema()
export class Category {
  @Prop()
  groupName?: string;

  @Prop({ type: [CategoryItem], _id: true })
  items?: CategoryItem[];
}

export type CategoryDocument = HydratedDocument<Category>;

export const CategorySchema = SchemaFactory.createForClass(Category);
