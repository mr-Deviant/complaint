import { Base } from '@typegoose/typegoose/lib/defaultClasses';
import { prop } from '@typegoose/typegoose';

export interface CityModel extends Base {} // Add _id prop

export class CityModel {
  @prop()
  name: string;

  @prop()
  url: string;
}
