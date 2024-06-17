import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ComplaintController } from './complaint.controller';
import { Complaint, ComplaintSchema } from './complaint.schema';
import { ComplaintService } from './complaint.service';
import { CountryModule } from '../country/country.module';

@Module({
  controllers: [ComplaintController],
  imports: [
    MongooseModule.forFeature([
      {
        name: Complaint.name,
        schema: ComplaintSchema,
        collection: 'complaints',
      },
    ]),
    CountryModule,
  ],
  providers: [ComplaintService],
})
export class ComplaintModule {}
