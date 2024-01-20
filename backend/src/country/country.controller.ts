import { Controller, Get, Param } from '@nestjs/common';
import { CountryService } from './country.service';
import { CityModel } from './city.model';

@Controller('country')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  @Get()
  async getAll() { // TODO: create dto
    return this.countryService.find();
  }

  @Get(':countryCode/city')
  async getCitiesByCountry(@Param() params: { countryCode: string }): Promise<CityModel[]> {
    return this.countryService.findCities(params.countryCode);
  }
}
