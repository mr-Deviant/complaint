import { Controller, Get, Param } from '@nestjs/common';
import { City } from './country.schema';
import { CountryService } from './country.service';

@Controller('country')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  @Get()
  async getAll() { // TODO: create dto
    return this.countryService.find();
  }

  @Get(':countryCode/city')
  async getCitiesByCountry(@Param() params: { countryCode: string }): Promise<City[]> {
    return this.countryService.findCities(params.countryCode);
  }
}
