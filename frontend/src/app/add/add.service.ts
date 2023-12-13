import { inject, Injectable } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { CompanyService } from './company/company.service';
import { PersonService } from './person/person.service';
import { ProductService } from './product/product.service';
import { ComplaintType } from '../enums/complaint-type';
import { CategoryModel } from '../models/category.model';
import { CountryModel } from '../models/country.model';
import { CategoryService } from '../services/category.service';
import { CountryService } from '../services/country.service';

@Injectable({
  providedIn: 'root',
})
export class AddService {
  private categoryService = inject(CategoryService);
  private countryService = inject(CountryService);
  private companyService = inject(CompanyService);
  private personService = inject(PersonService);
  private productService = inject(ProductService);

  public form = new FormGroup({
    name: new FormControl<string>('', { nonNullable: true }), // Company, Person, Product
    surname: new FormControl<string>('', { nonNullable: true }), // Person
    patronymic: new FormControl<string>('', { nonNullable: true }), // Person
    sites: new FormArray([new FormControl<string>('', { nonNullable: true })]),
    email: new FormControl<string>('', { validators: [Validators.email], nonNullable: true }),
    phones: new FormArray([new FormControl<string>('', { nonNullable: true })]),
    countryId: new FormControl<number | null>(null, [Validators.required]),
    cityName: new FormControl<string>(''),
    categoryId: new FormControl<number | null>(null, [Validators.required]),
    shortDescription: new FormControl<string>('', { validators: [Validators.required], nonNullable: true }),
    fullDescription: new FormControl<string>('', { validators: [Validators.required], nonNullable: true }),
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

  onSubmit(complaintType: ComplaintType): void {
    let complainService: CompanyService | PersonService | ProductService = this.getComplaintService(complaintType);

    if (this.form.valid) {
      complainService.create(this.form.getRawValue()).subscribe(() => {
        // TODO: reset forms in services and go to complaint
      });
      return;
    } else {
      this.form.markAllAsTouched();
    }
  }

  private getComplaintService(complaintType: ComplaintType): CompanyService | PersonService | ProductService {
    switch (complaintType) {
      case ComplaintType.Company:
        return this.companyService;
      case ComplaintType.Person:
        return this.personService;
      case ComplaintType.Product:
        return this.productService;
    }
  }
}
