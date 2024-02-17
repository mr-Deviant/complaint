import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { ComplaintController } from './complaint.controller';
import { ComplaintModel } from './complaint.model';
import { ComplaintService } from './complaint.service';
import { CountryModule } from '../country/country.module';

@Module({
  controllers: [ComplaintController],
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: ComplaintModel,
        schemaOptions: {
          collection: 'complaints',
        },
      },
    ]),
    CountryModule,
  ],
  providers: [ComplaintService],
})
export class ComplaintModule {}
