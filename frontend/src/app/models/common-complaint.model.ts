import { ComplaintTypeEnum } from '../enums/complaint-type.enum';

export interface CommonComplaintModel {
  _id?: string;
  type: ComplaintTypeEnum;
  // userId: string | null;
  // photoUrls: string[];
  name: string;
  // categoryId: string;
  countryCode: string;
  cityName: string; // On back should be saved cityId
  shortDescription: string;
  fullDescription: string;
}
