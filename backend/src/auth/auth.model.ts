import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
import { prop } from '@typegoose/typegoose';

export interface AuthModel extends Base {} // Add _id prop

export class AuthModel extends TimeStamps {
  @prop({ unique: true }) email: string; // Index also will be created
  @prop() passwordHash: string;
}
