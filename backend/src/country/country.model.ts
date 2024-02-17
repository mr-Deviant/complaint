import { prop } from '@typegoose/typegoose';
import { Base } from '@typegoose/typegoose/lib/defaultClasses';

export class CountryModel {
  @prop() code: string;
  @prop() name: string;
  @prop() phoneCode: string;
  @prop() cities: CityModel[];
}

export interface CityModel extends Base {} // Add _id prop

export class CityModel {
  @prop() name: string;
  @prop() url: string;
}
