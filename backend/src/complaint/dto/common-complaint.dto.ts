import { ComplaintTypeEnum } from '../../complaint/complaint-type.enum';

export interface CommonComplaintDto {
  _id?: string;
  type: ComplaintTypeEnum;
  // userId: string | null;
  // photoUrls: string[];
  name: string;
  categoryId: string;
  countryCode: string;
  cityId: string; // Saved on backend
  cityName: string; // Frontend sends
  shortDescription: string;
  fullDescription: string;
}
