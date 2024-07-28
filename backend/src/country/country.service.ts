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

  async findCountryNameByCountryCode(countryCode: string): Promise<string> {
    const country = await this.countryModel.findOne({ code: countryCode }, { name: 1 });

    return country ? country.name : '';
  }

  async findCities(countryCode: string): Promise<City[]> {
    return this.countryModel.findOne({ code: countryCode }, { cities: 1 }).distinct('cities');
  }

  async findOrCreateCity(
    countryCode: string,
    cityName: string | null,
  ): Promise<{ cityName: string | null; cityUrl: string | null }> {
    let name: string | null = null;
    let url: string | null = null;

    if (cityName) {
      name = this.normalizeCityName(cityName);

      const existingCity = await this.countryModel
        .findOne({ code: countryCode, cities: { $elemMatch: { name: name } } });

      if (existingCity) {
        url = existingCity.cities.find((city: City) => city.name === name)?.url || null;
      } else {
        url = this.convertToUrl(name);

        const country = await this.countryModel.updateOne(
          { code: countryCode },
          { $push: { cities: { name, url } } },
        );

        if (!country.modifiedCount) {
          name = null;
          url = null;
        }
      }
    }

    return {
      cityName: name,
      cityUrl: url,
    };
  }

  normalizeCityName(cityName: string): string {
    return (
      cityName
        .trim()
        // Split string into words
        .replace(/[^ \-]+/g, (word: string) => {
          // Capitalize each world
          const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
          // Lowercase "на" word
          const normalizedWord = capitalizedWord.replace(/^На$/, 'на');

          return normalizedWord;
        })
    );
  }

  convertToUrl(text: string): string {
    return this.curToLat(text.toLowerCase().replace(' ', '-'));
  }

  curToLat(text: string): string {
    const transform: { [key: string]: string } = {
      // Russian
      а: 'a',
      б: 'b',
      в: 'v',
      г: 'g',
      д: 'd',
      е: 'e',
      ё: 'yo',
      ж: 'zh',
      з: 'z',
      и: 'i',
      й: 'j',
      к: 'k',
      л: 'l',
      м: 'm',
      н: 'n',
      о: 'o',
      п: 'p',
      р: 'r',
      с: 's',
      т: 't',
      у: 'u',
      ф: 'f',
      х: 'h',
      ц: 'cz',
      ч: 'ch',
      ш: 'sh',
      щ: 'shh',
      ъ: '',
      ы: 'y',
      ь: '',
      э: 'e',
      ю: 'yu',
      я: 'ya',
      // Belarusian
      ў: 'u',
      // Ukrainian
      ґ: 'g',
      є: 'ye',
      ї: 'yi',
    };

    const result = text
      .split('')
      .map((character: string) => {
        return transform[character] || character;
      })
      .join('');

    return result;
  }
}
