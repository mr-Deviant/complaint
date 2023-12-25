import { inject, Injectable } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { CompanyService } from './company/company.service';
import { PersonService } from './person/person.service';
import { ProductService } from './product/product.service';
import { ComplaintTypeEnum } from '../enums/complaint-type.enum';
import { CategoryModel } from '../models/category.model';
import { CountryModel } from '../models/country.model';
import { CategoryService } from '../services/category.service';
import { CountryService } from '../services/country.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CompanyModel } from './company/company.model';
import { PersonModel } from './person/person.model';
import { ProductModel } from './product/product.model';

export type ComplaintServiceType = CompanyService | PersonService | ProductService;
export type ComplaintModel = CompanyModel | PersonModel | ProductModel;

@Injectable({
  providedIn: 'root',
})
export class AddService {
  private categoryService = inject(CategoryService);
  private countryService = inject(CountryService);
  private companyService = inject(CompanyService);
  private personService = inject(PersonService);
  private productService = inject(ProductService);

  // TODO: add maxlength to all fields
  public form: FormGroup = new FormGroup({
    // Company, Person, Product
    name: new FormControl<string>('', {
      validators: [Validators.maxLength(100)],
      nonNullable: true,
    }),
    // Person
    surname: new FormControl<string>({ value: '', disabled: true }, { nonNullable: true }),
    // Person
    patronymic: new FormControl<string>({ value: '', disabled: true }, { nonNullable: true }),
    // Company, Person
    sites: new FormArray([new FormControl<string>('', { nonNullable: true })]),
    // Company, Person
    email: new FormControl<string>('', { validators: [Validators.email], nonNullable: true }),
    // Company, Person
    phones: new FormArray([new FormControl<string>('', { nonNullable: true })]),
    // Product
    barCode: new FormControl<string>(
      { value: '', disabled: true },
      {
        validators: [Validators.maxLength(48)],
        nonNullable: true,
      },
    ),
    // Company, Person, Product
    countryId: new FormControl<string | null>(null, [Validators.required]),
    // Company, Person, Product
    cityName: new FormControl<string>('', { validators: [Validators.maxLength(100)], nonNullable: true }),
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

  public countriesFilter = new FormControl('');
  public categoriesFilter = new FormControl('');

  get sites(): FormArray {
    return this.form.get('sites') as FormArray;
  }

  get phones(): FormArray {
    return this.form.get('phones') as FormArray;
  }

  constructor() {
    this.categories$ = this.categoryService.readAll();
    this.countries$ = this.countryService.readAll();
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

  onSubmit(complaintType: ComplaintTypeEnum): void {
    const complaintServiceCreate = this.getComplaintServiceCreate(complaintType, this.form.value);

    if (this.form.valid) {
      complaintServiceCreate.subscribe(
        (result: ComplaintModel) => {
          console.log('Form submit', result);
          this.form.reset();
          // TODO: redirect to jsut created complaint
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

  private getComplaintServiceCreate(complaintType: ComplaintTypeEnum, formValue: unknown): Observable<ComplaintModel> {
    switch (complaintType) {
      case ComplaintTypeEnum.Company:
        return this.companyService.create(formValue as CompanyModel);
      case ComplaintTypeEnum.Person:
        return this.personService.create(formValue as PersonModel);
      case ComplaintTypeEnum.Product:
        return this.productService.create(formValue as ProductModel);
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
