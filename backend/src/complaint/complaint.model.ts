import { prop } from '@typegoose/typegoose';
import { Base } from '@typegoose/typegoose/lib/defaultClasses';
import { ComplaintTypeEnum } from './complaint-type.enum';

export interface ComplaintModel extends Base {} // Add _id prop

export class ComplaintModel {
  @prop() type: ComplaintTypeEnum;
  // @prop() userId: string | null;
  // @prop() photoUrls?: string[]];
  @prop() name: string;
  @prop() categoryId: string;
  @prop() countryCode: string;
  @prop() cityId: string; // Front sends cityName
  @prop() shortDescription: string;
  @prop() fullDescription: string;
  // Company, Person
  // @prop({ type: () => [Types.ObjectId] }) personsId?: Types.ObjectId[];
  @prop({ type: () => [String] }) phones?: string[];
  @prop() email?: string;
  @prop() sites?: string[];
  // Person
  @prop() surname?: string;
  @prop() patronymic?: string;
  // Product
  @prop() barCode?: string;
}
