import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormModule } from '../../common/form.module';
import { PersonRoutingModule } from './person-routing.module';
import { PersonComponent } from './person.component';

@NgModule({
  declarations: [
    PersonComponent
  ],
  imports: [
    CommonModule,
    FormModule,
    PersonRoutingModule,
  ]
})
export class PersonModule {}
