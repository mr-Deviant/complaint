import { CommonComplaintDto } from './common-complaint.dto';

export interface CompanyDto extends CommonComplaintDto {
  // personIds: number[];
  phones: string[];
  email: string;
  sites: string[];
}
