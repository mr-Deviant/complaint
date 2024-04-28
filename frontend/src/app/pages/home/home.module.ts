import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormModule } from '../../modules/form.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
    imports: [
        CommonModule,
        FormModule,
        HomeRoutingModule,
        HomeComponent,
    ]
})
export class HomeModule {}
