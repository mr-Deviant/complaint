import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { FormModule } from '../../modules/form.module';
import { AddComplaintRoutingModule } from './add-complaint-routing.module';
import { AddComplaintComponent } from './add-complaint.component';

@NgModule({
    imports: [
        CommonModule,
        FormModule,
        MatIconModule,
        AddComplaintRoutingModule,
        AddComplaintComponent,
    ],
})
export class AddComplaintModule {}
