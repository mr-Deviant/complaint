import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export class City {
  @Prop()
  name: string;

  @Prop()
  url: string;
}

@Schema()
export class Country {
  @Prop()
  code: string;

  @Prop()
  name: string;

  @Prop()
  phoneCode: string;

  @Prop({ type: [City] })
  cities: City[];
}

export type CountryDocument = HydratedDocument<Country>;

export const CountrySchema = SchemaFactory.createForClass(Country);
