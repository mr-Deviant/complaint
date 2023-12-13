import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';

import { AddRoutingModule } from './add-routing.module';
import { AddComponent } from './add.component';
import { FormModule } from '../common/form.module';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { TextFieldModule } from '@angular/cdk/text-field';

@NgModule({
  declarations: [AddComponent],
  imports: [
    CommonModule,
    FormModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    TextFieldModule,
    AddRoutingModule,
  ],
})
export class AddModule {
  constructor(private matIconRegistry: MatIconRegistry) {
    // Set icomoon as a default source of icons
    matIconRegistry.registerFontClassAlias('icomoon', 'icon');
    matIconRegistry.setDefaultFontSetClass('icomoon');
  }
}
