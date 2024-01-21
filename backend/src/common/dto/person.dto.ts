import { CommonComplaintDto } from './common-complaint.dto';

export interface CreatePersonDto extends CommonComplaintDto {
  surname?: string;
  patronymic?: string;
  phones?: string[];
  email?: string;
  sites?: string[];
}
