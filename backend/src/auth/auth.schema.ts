// import { TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export class Auth /*extends TimeStamps*/ {
  @Prop({ unique: true })
  email: string; // Index also will be created

  @Prop()
  passwordHash: string;
}

export type AuthDocument = HydratedDocument<Auth>;

export const AuthSchema = SchemaFactory.createForClass(Auth);