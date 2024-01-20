import { prop } from '@typegoose/typegoose';

export class CountryModel {
  @prop()
  code: string;

  @prop()
  name: string;

  @prop()
  phoneCode: string;
}
