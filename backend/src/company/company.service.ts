import { Injectable } from '@nestjs/common';
import { CompanyModel } from './company.model';
import { DocumentType, ModelType } from '@typegoose/typegoose/lib/types';
import { InjectModel } from 'nestjs-typegoose';
import { CreateCompanyDto } from './dto/create-company.dto';
import { Types } from 'mongoose';

@Injectable()
export class CompanyService {
  constructor(
    @InjectModel(CompanyModel)
    private readonly companyModel: ModelType<CompanyModel>,
  ) {}

  async create(dto: CreateCompanyDto): Promise<DocumentType<CompanyModel>> {
    return this.companyModel.create(dto);
  }

  async delete(id: string): Promise<DocumentType<CompanyModel> | null> {
    const deletedCompany = this.companyModel.findByIdAndDelete(id).exec();

    // TODO: delete nested persons in transaction
    // if (deletedCompany) {
    //   this.deletePersons(deletedCompany.personsId);
    // }

    return deletedCompany;
  }

  // async deletePersons(ids: string[]) {
  //   return this.companyModel.deleteMany({id: new types.ObjectId(id)}).exec();
  // }

  async findByCompanyId(
    companyId: string,
  ): Promise<DocumentType<CompanyModel>[]> {
    return this.companyModel
      .find({ companyId: new Types.ObjectId(companyId) })
      .exec();
  }
}
