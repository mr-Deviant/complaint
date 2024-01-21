import { Injectable } from '@nestjs/common';
import { ComplaintModel } from './complaint.model';
import { DocumentType, ModelType } from '@typegoose/typegoose/lib/types';
import { InjectModel } from 'nestjs-typegoose';
import { CreateComplaintDto } from './dto/create-complaint.dto';
import { Types } from 'mongoose';

@Injectable()
export class ComplaintService {
  constructor(
    @InjectModel(ComplaintModel)
    private readonly complaintModel: ModelType<ComplaintModel>,
  ) {}

  async create(dto: CreateComplaintDto): Promise<DocumentType<ComplaintModel>> {
    return this.complaintModel.create(dto);
  }

  async delete(id: string): Promise<DocumentType<ComplaintModel> | null> {
    const deletedComplaint = this.complaintModel.findByIdAndDelete(id).exec();

    // TODO: delete nested persons in transaction
    // if (deletedComplaint) {
    //   this.deletePersons(deletedComplaint.personsId);
    // }

    return deletedComplaint;
  }

  // async deletePersons(ids: string[]) {
  //   return this.complaintModel.deleteMany({id: new types.ObjectId(id)}).exec();
  // }

  async findByComplaintId(
    complaintId: string,
  ): Promise<DocumentType<ComplaintModel>[]> {
    return this.complaintModel
      .find({ complaintId: new Types.ObjectId(complaintId) })
      .exec();
  }
}
