import { Injectable } from '@nestjs/common';
import { CountryModel } from './country.model';
import { DocumentType, ModelType } from '@typegoose/typegoose/lib/types';
import { InjectModel } from 'nestjs-typegoose';

@Injectable()
export class CountryService {
  constructor(
    @InjectModel(CountryModel)
    private readonly countryModel: ModelType<CountryModel>,
  ) {}

  async find(): Promise<DocumentType<CountryModel>[]> {
    // TODO: select nameRu as name
    return this.countryModel.find({}, { _id: 0, phoneCode: 0 });
  }
}
