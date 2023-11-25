import { prop } from '@typegoose/typegoose';
import { Base } from '@typegoose/typegoose/lib/defaultClasses';

class CategoryItem {
  @prop()
  name: string;
}

export interface CategoryModel extends Base {} // Add _id prop

export class CategoryModel {
  @prop()
  groupName?: string;

  @prop({ type: () => [CategoryItem], _id: true })
  items?: CategoryItem[];
}
