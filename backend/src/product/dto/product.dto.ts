import { ComplaintDto } from '../../common/dto/complaint.dto';

export interface CreateProductDto extends ComplaintDto {
  name: string;
  barCode?: string[];
}