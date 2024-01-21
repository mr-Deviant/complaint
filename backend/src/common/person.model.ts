import { prop } from '@typegoose/typegoose';
import { Base } from '@typegoose/typegoose/lib/defaultClasses';
import { CommonComplaintModel } from './common-complaint.model';

export interface PersonModel extends Base {} // Add _id prop

export class PersonModel extends CommonComplaintModel {
  @prop() surname?: string;
  @prop() patronymic?: string;
  @prop({ type: () => [String] }) phones?: string[];
  @prop() email?: string;
  @prop() sites?: string;
}
