import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';

@NgModule({
    imports: [
        CommonModule,
        MatButtonModule,
        MainRoutingModule,
        MainComponent,
    ],
})
export class MainModule {}
