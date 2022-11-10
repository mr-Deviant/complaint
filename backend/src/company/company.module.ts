import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { CompanyController } from './company.controller';
import { CompanyModel } from './company.model';
import { CompanyService } from './company.service';

@Module({
  controllers: [CompanyController],
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: CompanyModel,
        schemaOptions: {
          collection: 'Company',
        },
      },
    ]),
  ],
  providers: [CompanyService],
})
export class CompanyModule {}
