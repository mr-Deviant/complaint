import { ComplaintTypeEnum } from '../../complaint/complaint-type.enum';

export interface CommonComplaintDto {
  _id?: string;
  type: ComplaintTypeEnum;
  userId: string | null;
  addedDate: Date;
  // photoUrls: string[];
  name: string;
  // categoryId: string;
  countryCode: string;
  countryName: string | null;
  cityName: string | null;
  cityUrl: string | null;
  shortDescription: string;
  fullDescription: string;
}
