import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormModule } from '../../modules/form.module';
import { PersonRoutingModule } from './person-routing.module';
import { PersonComponent } from './person.component';
import { SharedModule } from '../../modules/shared.module';

@NgModule({
  declarations: [
    PersonComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormModule,
    PersonRoutingModule,
  ]
})
export class PersonModule {}
