import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';
import { CountrySelectComponent } from '../components/country-select/country-select.component';
import { FilterPipe } from '../pipes/filter.pipe';
import { IncludesPipe } from '../pipes/includes.pipe';

@NgModule({
  declarations: [
    CountrySelectComponent,
    FilterPipe,
    IncludesPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatAutocompleteModule,
    MatSelectModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatAutocompleteModule,
    MatSelectModule,
    CountrySelectComponent,
    FilterPipe,
    IncludesPipe,
  ],
  providers: [
    FilterPipe,
    IncludesPipe,
  ]
})
export class FormModule {}
