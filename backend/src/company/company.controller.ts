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
import { CreateCompanyDto } from './dto/create-company.dto';
import { CompanyModel } from './company.model';
import { CompanyService } from './company.service';
import { COMPANY_NOT_FOUND } from './company.constants';

@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Post('create')
  async create(@Body() dto: CreateCompanyDto) {
    return this.companyService.create(dto);
  }

  @Get(':id')
  async get(@Param('id') id: string) {
    return this.companyService.findByCompanyId(id);
  }

  @Patch(':id')
  async patch(@Param('id') id: string, @Body() dto: CompanyModel) {
    // TODO:
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    const deletedCompany = await this.companyService.delete(id);

    if (!deletedCompany) {
      throw new HttpException(COMPANY_NOT_FOUND, HttpStatus.NOT_FOUND);
    }
  }
}
