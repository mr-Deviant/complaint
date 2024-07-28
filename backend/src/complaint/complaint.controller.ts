import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { ComplaintDto } from './dto/complaint.dto';
import { ComplaintService } from './complaint.service';
import { COMPLAINT_NOT_FOUND } from './complaint.constants';
import { CountryService } from '../country/country.service';

@Controller('complaint')
export class ComplaintController {
  constructor(
    private readonly complaintService: ComplaintService,
    private readonly countryService: CountryService,
  ) {}

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

  @Get(':id') async get(@Param('id') id: string) {
    return this.complaintService.findByComplaintId(id);
  }

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

  @Get() async getComplaints() {
    return {
      countries: [
        {
          code: 'ua',
          name: 'Украина',
          cities: [
            { _id: '12345', name: 'Киев', url: 'kiev' },
            { _id: '09876', name: 'Харьков', url: 'harkov' },
          ],
        },
        { code: 'ru', name: 'Россия', cities: [] },
      ],
      categories: [
        {
          name: 'Производство и материалы',
          subCategories: [
            { _id: 2200, name: 'Агропром, сельское хозяйство' },
            { _id: 2201, name: 'Геофизика, геодезия, геология' },
          ],
        },
      ],
    };
  }
}
