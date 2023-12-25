import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { SharedModule } from '../../modules/shared.module';
import { FormModule } from '../../modules/form.module';
import { ProductComponent } from './product.component';

@NgModule({
  declarations: [
    ProductComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormModule,
    ProductRoutingModule,
  ]
})
export class ProductModule {}
