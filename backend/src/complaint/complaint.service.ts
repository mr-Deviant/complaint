import { Injectable } from '@nestjs/common';
import { ComplaintModel } from './complaint.model';
import { DocumentType, ModelType } from '@typegoose/typegoose/lib/types';
import { InjectModel } from 'nestjs-typegoose';
import { ComplaintDto } from './dto/complaint.dto';
import { Types } from 'mongoose';


@Injectable()
export class ComplaintService {
  constructor(
    @InjectModel(ComplaintModel) private readonly complaintModel: ModelType<ComplaintModel>,
  ) {}

  async create(dto: ComplaintDto): Promise<DocumentType<ComplaintModel>> {
    // Check if such city exists, and if no, insert it

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

  async findByComplaintId(complaintId: string): Promise<DocumentType<ComplaintModel> | null> {
    return this.complaintModel.findOne({ _id: complaintId }).exec();
  }

  async findLast(limit: number): Promise<DocumentType<ComplaintModel>[]> {
    // TODO: isActive: true
    return this.complaintModel.find({}).sort({ _id: -1 }).limit(limit).exec();
  }

  prepareCityName(cityName: string): string {
    return cityName.replace(/[^ \-]+/g, (word: string) => {
      // Capitalize each world
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
  }
}
