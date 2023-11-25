import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormModule } from '../../common/form.module';
import { CompanyRoutingModule } from './company-routing.module';
import { CompanyComponent } from './company.component';
import { FilterPipe } from '../../pipes/filter.pipe';
import { IncludesPipe } from '../../pipes/includes.pipe';


@NgModule({
  declarations: [
    CompanyComponent,
    FilterPipe, // TODO: move to shared module
    IncludesPipe, // TODO: move to shared module
  ],
  imports: [
    CommonModule,
    FormModule,
    CompanyRoutingModule,
  ]
})
export class CompanyModule {}
