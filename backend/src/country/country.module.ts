import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CountryController } from './country.controller';
import { CountryService } from './country.service';
import { Country, CountrySchema } from './country.schema';

@Module({
  controllers: [CountryController],
  imports: [
    MongooseModule.forFeature([
      {
        name: Country.name,
        schema: CountrySchema,
        collection: 'countries',
      },
    ]),
  ],
  providers: [CountryService],
  exports: [CountryService],
})
export class CountryModule {}
