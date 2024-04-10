import { CommonComplaintDto } from './common-complaint.dto';

export interface ProductDto extends CommonComplaintDto {
  barCode: string;
}
