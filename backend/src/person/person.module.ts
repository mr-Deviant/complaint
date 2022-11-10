import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { PersonController } from './person.controller';
import { PersonModel } from './person.model';

@Module({
  controllers: [PersonController],
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: PersonModel,
        schemaOptions: {
          collection: 'Person'
        }
      }
    ])
  ]
})
export class PersonModule {}
