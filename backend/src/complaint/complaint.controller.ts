import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateComplaintDto } from './dto/create-complaint.dto';
import { ComplaintService } from './complaint.service';
import { COMPLAINT_NOT_FOUND } from './complaint.constants';
import { ComplaintType } from './complaint.type';

@Controller('complaint')
export class ComplaintController {
  constructor(private readonly complaintService: ComplaintService) {}

  @Post('create')
  async create(@Body() dto: CreateComplaintDto) {
    return this.complaintService.create(dto);
  }

  @Get(':id')
  async get(@Param('id') id: string) {
    return this.complaintService.findByComplaintId(id);
  }

  @Patch(':id')
  async patch(@Param('id') id: string, @Body() dto: ComplaintType) {
    // TODO:
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    const deletedComplaint = await this.complaintService.delete(id);

    if (!deletedComplaint) {
      throw new HttpException(COMPLAINT_NOT_FOUND, HttpStatus.NOT_FOUND);
    }
  }
}
