import { Injectable } from '@nestjs/common';
import { City, Country } from './country.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class CountryService {
  constructor(@InjectModel(Country.name) private readonly countryModel: Model<Country>) {}

  async find(): Promise<Country[]> {
    return this.countryModel.find({}, { _id: 0, phoneCode: 0, cities: 0 });
  }

  async findCities(countryCode: string): Promise<City[]> {
    return this.countryModel.findOne({ code: countryCode }, { cities: 1 })
      .distinct('cities');
  }

  async findCityOrCreate(countryCode: string, cityName: string): Promise<string> {
    cityName = cityName.trim();

    const cityId = await this.countryModel
      .find({ code: countryCode, cities: { $in: [cityName] } })
      .limit(1)
      .exec();

    console.log('test', cityId);

    if (!cityId) {
      this.countryModel.updateOne(
        { code: countryCode, cities: { $in: [cityName] } },
        { $push: { cities: { _id: '123'/*ObjectId()*/, name: cityName, url: 'XXX' } } }
      )
    }

    return '123';
  }
}
