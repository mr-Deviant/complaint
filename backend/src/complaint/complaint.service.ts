import { Injectable } from '@nestjs/common';
import { Complaint } from './complaint.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ComplaintDto } from './dto/complaint.dto';

@Injectable()
export class ComplaintService {
  constructor(@InjectModel(Complaint.name) private readonly complaintModel: Model<Complaint>) {}

  async create(dto: ComplaintDto): Promise<Complaint> {
    // Check if such city exists, and if no, insert it

    return this.complaintModel.create(dto);
  }

  async delete(id: string): Promise<Complaint | null> {
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

  async findByComplaintId(complaintId: string): Promise<Complaint | null> {
    return this.complaintModel.findOne({ _id: complaintId }).exec();
  }

  async findLast(limit: number): Promise<Complaint[]> {
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
