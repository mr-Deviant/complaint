import { prop } from '@typegoose/typegoose';
import { Base } from '@typegoose/typegoose/lib/defaultClasses';

export interface PersonModel extends Base {} // Add _id prop

export class PersonModel {
  @prop()
  userId: string;

  @prop({ type: () => [String] })
  photos?: string[];

  @prop()
  surname?: string;

  @prop()
  name?: string;

  @prop()
  patronymic?: string;

  @prop({ type: () => [String] })
  phones?: string[];

  @prop()
  email?: string;

  @prop()
  site?: string; // TODO: Instagram, facebook, vk,

  @prop()
  countryId: number;

  @prop()
  cityId?: number;

  @prop()
  categoryId: number;

  @prop()
  shortDescription: string;

  @prop()
  fullDescription: string;
}
