import { prop } from '@typegoose/typegoose';

export class CountryModel {
  @prop()
  code: string;

  @prop()
  nameRu: string;

  // @prop()
  // phoneCode: string;
}
