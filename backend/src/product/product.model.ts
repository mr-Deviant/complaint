import { prop } from '@typegoose/typegoose';
import { Base } from '@typegoose/typegoose/lib/defaultClasses';

export interface ProductModel extends Base {} // Add _id prop

// TODO: extend common fields from common complaint
export class ProductModel {
  // @prop()
  // userId: string;
  //
  // @prop({ type: () => [String] })
  // photos?: string[];

  @prop()
  name?: string;

  @prop()
  countryId: number;

  @prop()
  cityName?: string;

  @prop()
  categoryId: number;

  @prop()
  shortDescription: string;

  @prop()
  fullDescription: string;
}
