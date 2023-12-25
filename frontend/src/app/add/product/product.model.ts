import { ComplaintModel } from '../../models/complaint.model';

export interface ProductModel extends ComplaintModel {
  name: string;
  barCode?: string;
}
