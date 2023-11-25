import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconRegistry } from '@angular/material/icon';

import { AddRoutingModule } from './add-routing.module';
import { AddComponent } from './add.component';

@NgModule({
  declarations: [AddComponent],
  imports: [CommonModule, MatTabsModule, AddRoutingModule],
})
export class AddModule {
  constructor(private matIconRegistry: MatIconRegistry) {
    // Set icomoon as a default source of icons
    matIconRegistry.registerFontClassAlias('icomoon', 'icon');
    matIconRegistry.setDefaultFontSetClass('icomoon');
  }
}
