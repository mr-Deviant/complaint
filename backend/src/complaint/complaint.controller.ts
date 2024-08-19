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
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ComplaintService } from './complaint.service';
import { COMPLAINT_NOT_FOUND } from './complaint.constants';
import { CountryService } from '../country/country.service';
import { ComplaintDto } from './dto/complaint.dto';

@Controller('complaint')
export class ComplaintController {
  constructor(
    private readonly complaintService: ComplaintService,
    private readonly countryService: CountryService,
  ) {}

  @UsePipes(new ValidationPipe())
  // Class validator is not working with type (CompanyDto | PersonDto | ProductDto), only with class
  @Post() async create(@Body() dto: ComplaintDto) {
    const countryName = await this.countryService.findCountryNameByCountryCode(dto.countryCode);
    const { cityName, cityUrl } = await this.countryService.findOrCreateCity(dto.countryCode, dto.cityName);

    dto = {
      ...dto,
      userId: null,
      addedDate: new Date(),
      countryName,
      cityName,
      cityUrl,
    };

    return this.complaintService.create(dto);
  }

  @Get('/countries') async getCountriesAndCities() {
    return this.complaintService.findCountriesAndCities();
  }

  @Get('/country-complaints/:countryCode') async getCountryComplaints(@Param('countryCode') countryCode: string) {
    return this.complaintService.getCountryComplaints(countryCode);
  }

  @Get(':id') async get(@Param('id') id: string) {
    return this.complaintService.findByComplaintId(id);
  }

  @UsePipes(new ValidationPipe())
  @Patch(':id')
  async patch(@Param('id') id: string, @Body() dto: ComplaintDto) {
    // TODO:
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    const deletedComplaint = await this.complaintService.delete(id);

    if (!deletedComplaint) {
      throw new HttpException(COMPLAINT_NOT_FOUND, HttpStatus.NOT_FOUND);
    }
  }

  @Get('/last/:limit') async getLast(@Param('limit') limit: string) {
    return this.complaintService.findLast(parseInt(limit));
  }
}
