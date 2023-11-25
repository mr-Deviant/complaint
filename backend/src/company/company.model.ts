import { prop } from '@typegoose/typegoose';
import { Base } from '@typegoose/typegoose/lib/defaultClasses';
import { Types } from 'mongoose';

export interface CompanyModel extends Base {} // Add _id prop

export class CompanyModel {
  // @prop()
  // userId: string;
  //
  // @prop({ type: () => [String] })
  // photos?: string[];
  //
  // @prop({ type: () => [Types.ObjectId] })
  // personsId?: Types.ObjectId[];

  @prop()
  name?: string;

  @prop({ type: () => [String] })
  phones?: string[];

  @prop()
  email?: string;

  @prop()
  site?: string; // TODO: Instagram, facebook, vk,

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
