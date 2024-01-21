import { CommonComplaintDto } from './common-complaint.dto';

export interface CreateProductDto extends CommonComplaintDto {
  barCode?: string;
}
