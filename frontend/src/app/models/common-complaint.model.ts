import { ComplaintTypeEnum } from '../enums/complaint-type.enum';

export interface CommonComplaintModel {
  _id?: string;
  type: ComplaintTypeEnum;
  // userId: string | null;
  // photoUrls: string[];
  name: string;
  // categoryId: string;
  countryCode: string;
  countryName?: string;
  cityName: string | null;
  cityUrl?: string | null;
  shortDescription: string;
  fullDescription: string;
}
