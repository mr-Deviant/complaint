import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { PersonModel } from './person.model';

@Controller('person')
export class PersonController {
  @Post('create')
  async create(@Body() dto: Omit<PersonModel, '_id'>) { // TODO: create dto

  }

  @Get(':id')
  async get(@Param('id') id: string) {

  }

  @Patch(':id')
  async patch(@Param('id') id: string, @Body() dto: PersonModel) {

  }

  @Delete(':id')
  async delete(@Param('id') id: string) {

  }
}
