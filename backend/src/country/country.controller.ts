import { Controller, Get } from '@nestjs/common';
import { CountryService } from './country.service';

@Controller('country')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  @Get()
  async getAll() { // TODO: create dto
    return this.countryService.find();
  }
}
