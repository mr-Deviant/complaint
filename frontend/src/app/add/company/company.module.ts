import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormModule } from '../../modules/form.module';
import { CompanyRoutingModule } from './company-routing.module';
import { CompanyComponent } from './company.component';
import { SharedModule } from '../../modules/shared.module';


@NgModule({
  declarations: [
    CompanyComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormModule,
    CompanyRoutingModule,
  ]
})
export class CompanyModule {}
