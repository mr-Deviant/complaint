import { prop } from '@typegoose/typegoose';
import { ComplaintModel } from '../common/complaint.model';

export class ProductModel extends ComplaintModel {
  @prop()
  name?: string;

  @prop()
  barCode?: string;
}
