import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';
import { SelectWithFilterComponent } from '../components/select-with-filter/select-with-filter.component';
import { FilterPipe } from '../pipes/filter.pipe';
import { IncludesPipe } from '../pipes/includes.pipe';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

@NgModule({
  declarations: [
    SelectWithFilterComponent,
    FilterPipe,
    IncludesPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatOptionModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatOptionModule,
    SelectWithFilterComponent,
    FilterPipe,
    IncludesPipe,
  ],
  providers: [
    FilterPipe,
    IncludesPipe,
  ]
})
export class FormModule {}
