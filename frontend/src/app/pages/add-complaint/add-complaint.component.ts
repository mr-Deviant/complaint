import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { map, Observable, takeUntil } from 'rxjs';
import { CategoryService } from '../../services/category.service';
import { CountryService } from '../../services/country.service';
import { CategoryModel } from '../../models/category.model';
import { CountryModel } from '../../models/country.model';
import { ComplaintTypeEnum } from '../../enums/complaint-type.enum';
import { ComplaintService } from '../../services/complaint.service';
import { BaseComponent } from '../../components/base.component';
import { ComplaintType } from '../../types/complaint.type';
import { CityModel } from 'src/app/models/city.model';

@Component({
  // selector: 'app-add-complaint',
  templateUrl: './add-complaint.component.html',
  styleUrls: ['./add-complaint.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddComplaintComponent extends BaseComponent implements OnInit {
  private complaintService = inject(ComplaintService);
  private categoryService = inject(CategoryService);
  private countryService = inject(CountryService);

  public readonly maxSitesNum = 4;
  public readonly maxPhonesNum = 3;

  public ComplaintTypeEnum = ComplaintTypeEnum;

  public form: FormGroup = new FormGroup({
    // Company, Person, Product
    type: new FormControl<ComplaintTypeEnum>(ComplaintTypeEnum.Company),
    // Company, Person, Product
    name: new FormControl<string>('', {
      validators: [Validators.maxLength(100)],
      nonNullable: true,
    }),
    // Person
    surname: new FormControl<string>({ value: '', disabled: true }, {
      validators: [Validators.maxLength(100)],
      nonNullable: true,
    }),
    // Person
    patronymic: new FormControl<string>({ value: '', disabled: true }, {
      validators: [Validators.maxLength(100)],
      nonNullable: true,
    }),
    // Company, Person
    sites: new FormArray([new FormControl<string>('', {
      validators: [Validators.maxLength(100)],
      nonNullable: true,
    })]),
    // Company, Person
    email: new FormControl<string>('', {
      validators: [Validators.email, Validators.maxLength(100)],
      nonNullable: true,
    }),
    // Company, Person
    phones: new FormArray([new FormControl<string>('', {
      validators: [Validators.maxLength(20)],
      nonNullable: true
    })]),
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
    categoryId: new FormControl<string | null>(null, [Validators.required]),
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

  // TODO: delete after moving to custom controls
  public categoriesFilter = new FormControl('');

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
      .subscribe((type: ComplaintTypeEnum) => {
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
      .subscribe((countryCode: string): void => {
        this.cities$ = this.countryService.readCitiesByCountry(countryCode).pipe(
          map((cities: CityModel[]) => {
            return cities.map((city: CityModel) => city.name);
          })
        );
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
      this.complaintService.create(this.form.value).subscribe(
        (result: ComplaintType) => {
          console.log('Form submit', result);
          this.form.reset();
          // TODO: redirect to just created complaint
        },
        (error: HttpErrorResponse) => {
          console.error("Couln't save complaint on server", error);
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
