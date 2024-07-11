import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ComplaintTypeEnum } from './complaint-type.enum';
import { HydratedDocument } from 'mongoose';

@Schema()
export class Complaint {
  @Prop()
  type: ComplaintTypeEnum;

  @Prop({ nullable: true })
  userId: string;

  @Prop()
  addedDate: Date;

  // @Prop({ type: [String] })
  // photoUrls?: string[]];

  @Prop()
  name: string;

  // @Prop()
  // categoryId: string;

  @Prop()
  countryId: string;

  @Prop()
  countryCode: string;

  @Prop()
  cityId: string;

  @Prop()
  cityName: string;

  @Prop()
  shortDescription: string;

  @Prop()
  fullDescription: string;

  // Company, Person
  // @Prop()({ type: [{type: mongoose.Schema.Types.ObjectId, ref: 'Person'}] })
  // personsId?: Person[];

  @Prop({ type: [String] })
  phones?: string[];

  @Prop()
  email?: string;

  @Prop({ type: [String] })
  sites?: string[];

  // Person
  @Prop()
  surname?: string;

  @Prop()
  patronymic?: string;

  // Product
  @Prop()
  barCode?: string;
}

export type ComplaintDocument = HydratedDocument<Complaint>;

export const ComplaintSchema = SchemaFactory.createForClass(Complaint);
