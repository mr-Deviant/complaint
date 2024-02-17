import { prop } from '@typegoose/typegoose';

export class CommonComplaintModel {
  // @prop() userId: string | null;
  // @prop() photoUrls?: string[]];
  @prop() name?: string;
  @prop() categoryId: string;
  @prop() countryCode: string;
  @prop() cityName?: string;
  @prop() shortDescription: string;
  @prop() fullDescription: string;
}
