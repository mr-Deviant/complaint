import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormModule } from '../../common/form.module';
import { CompanyRoutingModule } from './company-routing.module';
import { CompanyComponent } from './company.component';
import { SharedModule } from '../../common/shared.module';


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
