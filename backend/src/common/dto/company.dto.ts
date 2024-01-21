import { CommonComplaintDto } from './common-complaint.dto';

export interface CreateCompanyDto extends CommonComplaintDto {
  // personIds: number[];
  phones?: string[];
  email?: string;
  sites?: string[];
}
