import { prop } from '@typegoose/typegoose';
import { Base } from '@typegoose/typegoose/lib/defaultClasses';

export interface ComplaintModel extends Base {} // Add _id prop

export class ComplaintModel {
  // @prop() userId: string | null;
  // @prop() photoUrls?: string[]];
  @prop() name?: string;
  @prop() categoryId: string;
  @prop() countryCode: string;
  @prop() cityName?: string; // For frontend
  @prop() cityId?: string; // For backend
  @prop() shortDescription: string;
  @prop() fullDescription: string;
  // Company
  // @prop({ type: () => [Types.ObjectId] }) personsId?: Types.ObjectId[];
  @prop({ type: () => [String] }) phones?: string[];
  @prop() email?: string;
  @prop() sites?: string[];
  // Person
  @prop() surname?: string;
  @prop() patronymic?: string;
  // @prop({ type: () => [String] }) phones?: string[];
  // @prop() email?: string;
  // @prop() sites?: string;
  // Product
  @prop() barCode?: string;
}
