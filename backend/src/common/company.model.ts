import { prop } from '@typegoose/typegoose';
import { Base } from '@typegoose/typegoose/lib/defaultClasses';
import { CommonComplaintModel } from './common-complaint.model';

export interface CompanyModel extends Base {} // Add _id prop

export class CompanyModel extends CommonComplaintModel {
  // @prop({ type: () => [Types.ObjectId] }) personsId?: Types.ObjectId[];
  @prop({ type: () => [String] }) phones?: string[];
  @prop() email?: string;
  @prop() sites?: string[];
}
