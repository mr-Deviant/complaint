import { prop } from '@typegoose/typegoose';
import { Base } from '@typegoose/typegoose/lib/defaultClasses';

export interface ComplaintModel extends Base {} // Add _id prop
export class ComplaintModel {
  @prop()
  userId: string | null;

  @prop({ type: () => [String] })
  photoUrls?: string[];

  @prop()
  countryId: string;

  @prop()
  cityName?: string;

  @prop()
  categoryId: string;

  @prop()
  shortDescription: string;

  @prop()
  fullDescription: string;
}