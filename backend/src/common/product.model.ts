import { prop } from '@typegoose/typegoose';
import { Base } from '@typegoose/typegoose/lib/defaultClasses';
import { CommonComplaintModel } from './common-complaint.model';

export interface ProductModel extends Base {} // Add _id prop

export class ProductModel extends CommonComplaintModel {
  @prop() barCode?: string;
}
