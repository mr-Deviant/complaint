import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { CountryController } from './country.controller';
import { CountryModel } from './country.model';
import { CountryService } from './country.service';

@Module({
  controllers: [CountryController],
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: CountryModel,
        schemaOptions: {
          collection: 'countries',
        },
      },
    ]),
  ],
  providers: [CountryService],
  exports: [CountryService],
})
export class CountryModule {}
