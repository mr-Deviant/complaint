import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { FormArray, FormControl, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatOptionModule } from '@angular/material/core';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { map, Observable, takeUntil } from 'rxjs';
import { BaseComponent } from '../../components/base.component';
import { SelectWithFilterComponent } from '../../components/select-with-filter/select-with-filter.component';
import { FilterPipe } from '../../pipes/filter.pipe';
import { CategoryService } from '../../services/category.service';
import { CountryService } from '../../services/country.service';
import { ComplaintService } from '../../services/complaint.service';
import { CategoryModel } from '../../models/category.model';
import { CountryModel } from '../../models/country.model';
import { CityModel } from 'src/app/models/city.model';
import { ComplaintTypeEnum } from '../../enums/complaint-type.enum';
import { ComplaintType } from '../../types/complaint.type';

@Component({
  // selector: 'app-add-complaint',
  templateUrl: './add-complaint.component.html',
  styleUrls: ['./add-complaint.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
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
    MatOptionModule,
    CdkTextareaAutosize,
    SelectWithFilterComponent,
    FilterPipe,
  ],
})
export class AddComplaintComponent extends BaseComponent implements OnInit {
  private router = inject(Router);
  private complaintService = inject(ComplaintService);
  private categoryService = inject(CategoryService);
  private countryService = inject(CountryService);

  public readonly maxSitesNum = 4;
  public readonly maxPhonesNum = 3;

  public ComplaintTypeEnum = ComplaintTypeEnum;

  public form = new FormGroup({
    // Company, Person, Product
    type: new FormControl<ComplaintTypeEnum>(ComplaintTypeEnum.Company),
    // Company, Person, Product
    name: new FormControl<string>('', {
      validators: [Validators.maxLength(100)],
      nonNullable: true,
    }),
    // Person
    surname: new FormControl<string | undefined>(
      { value: '', disabled: true },
      {
        validators: [Validators.maxLength(100)],
        nonNullable: true,
      },
    ),
    // Person
    patronymic: new FormControl<string | undefined>(
      { value: '', disabled: true },
      {
        validators: [Validators.maxLength(100)],
        nonNullable: true,
      },
    ),
    // Company, Person
    sites: new FormArray([
      new FormControl<string>('', {
        validators: [Validators.maxLength(100)],
        nonNullable: true,
      }),
    ]),
    // Company, Person
    email: new FormControl<string>('', {
      validators: [Validators.email, Validators.maxLength(100)],
      nonNullable: true,
    }),
    // Company, Person
    phones: new FormArray([
      new FormControl<string>('', {
        validators: [Validators.maxLength(20)],
        nonNullable: true,
      }),
    ]),
    // Product
    barCode: new FormControl<string>(
      { value: '', disabled: true },
      {
        validators: [Validators.maxLength(50)],
        nonNullable: true,
      },
    ),
    // Company, Person, Product
    countryCode: new FormControl<string | null>(null, [Validators.required]),
    // Company, Person, Product
    cityName: new FormControl<string>('', {
      validators: [Validators.maxLength(100)],
      nonNullable: true,
    }),
    // Company, Person, Product
    // categoryId: new FormControl<string | null>(null, [Validators.required]),
    // Company, Person, Product
    shortDescription: new FormControl<string>('', {
      validators: [Validators.required, Validators.maxLength(150)],
      nonNullable: true,
    }),
    // Company, Person, Product
    fullDescription: new FormControl<string>('', {
      validators: [Validators.required, Validators.maxLength(2000)],
      nonNullable: true,
    }),
  });

  public categories$: Observable<CategoryModel[]>;
  public countries$: Observable<CountryModel[]>;
  public cities$!: Observable<string[]>;

  get sites(): FormArray {
    return this.form.get('sites') as FormArray;
  }

  get phones(): FormArray {
    return this.form.get('phones') as FormArray;
  }

  constructor() {
    super();
    this.categories$ = this.categoryService.readAll();
    this.countries$ = this.countryService.readAll();
  }

  ngOnInit(): void {
    this.handleTypeChange();
    this.handleCountryChange();
  }

  private handleTypeChange(): void {
    this.form
      .get('type')
      ?.valueChanges.pipe(takeUntil(this.destroyed$))
      .subscribe((type: Partial<ComplaintTypeEnum | null>) => {
        switch (type) {
          case ComplaintTypeEnum.Company:
            this.disableFields('surname', 'patronymic', 'barCode');
            this.enableFields('sites', 'email', 'phones');
            break;
          case ComplaintTypeEnum.Person:
            this.disableFields('barCode');
            this.enableFields('surname', 'patronymic', 'sites', 'email', 'phones');
            break;
          case ComplaintTypeEnum.Product:
            this.disableFields('surname', 'patronymic', 'sites', 'email', 'phones');
            this.enableFields('barCode');
            break;
        }
      });
  }

  private handleCountryChange(): void {
    this.form
      .get('countryCode')
      ?.valueChanges.pipe(takeUntil(this.destroyed$))
      .subscribe((countryCode: Partial<string | null>): void => {
        if (countryCode) {
          this.cities$ = this.countryService.readCitiesByCountry(countryCode).pipe(
            map((cities: CityModel[]) => {
              return cities.map((city: CityModel) => city.name);
            }),
          );
        }
      });
  }

  addSite(): void {
    this.sites?.push(new FormControl(''), { emitEvent: false });
  }

  removeSite(index: number): void {
    this.sites.removeAt(index);
  }

  addPhone(): void {
    this.phones?.push(new FormControl(''), { emitEvent: false });
  }

  removePhone(index: number): void {
    this.phones.removeAt(index);
  }

  onSubmit(): void {
    if (this.form.valid) {
      const value = this.form.value;
      type arrayField = 'sites' | 'phones';

      // Remove empty values from arrays
      (['sites', 'phones'] as arrayField[]).forEach((field: arrayField) => {
        value[field] = value[field]?.filter((item: string) => item);
      });

      this.complaintService.create(this.form.value as ComplaintType).subscribe(
        (complaint: ComplaintType) => {
          console.log('Form submit', complaint); // TODO: remove
          this.form.reset();
          this.router.navigate(['/', complaint._id]);
        },
        (error: HttpErrorResponse) => {
          console.error("Couldn't save complaint on server", error);
        },
      );
      return;
    } else {
      this.form.markAllAsTouched();
    }
  }

  enableFields(...fields: string[]): void {
    fields.forEach((field: string) => {
      this.form.get(field)?.enable({ emitEvent: false });
    });
  }

  disableFields(...fields: string[]): void {
    fields.forEach((field: string) => {
      this.form.get(field)?.disable({ emitEvent: false });
    });
  }
}
