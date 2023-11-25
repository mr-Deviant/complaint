import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormModule } from '../common/form.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    FormModule,
    HomeRoutingModule,
  ]
})
export class HomeModule {}
