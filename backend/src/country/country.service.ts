import { Injectable } from '@nestjs/common';
import { CountryModel } from './country.model';
import { DocumentType, ModelType } from '@typegoose/typegoose/lib/types';
import { InjectModel } from 'nestjs-typegoose';
import { CityModel } from './city.model';

@Injectable()
export class CountryService {
  constructor(
    @InjectModel(CountryModel)
    private readonly countryModel: ModelType<CountryModel>,
  ) {}

  async find(): Promise<DocumentType<CountryModel>[]> {
    return this.countryModel.find({}, { _id: 0, phoneCode: 0, cities: 0 });
  }

  async findCities(countryCode: string): Promise<CityModel[]> {
    return this.countryModel.findOne({ code: countryCode }, { cities: 1 })
      .distinct('cities');
  }
}
