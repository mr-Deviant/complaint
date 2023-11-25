import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, ReplaySubject } from 'rxjs';
import { CategoryModel } from 'src/app/models/category.model';
import { Company } from './company.model';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  constructor(private http: HttpClient) {}

  public form = new FormGroup({
    // photos
    // personsId
    name: new FormControl<string>('', { nonNullable: true }),
    site: new FormControl<string>('', { nonNullable: true }),
    // TODO: Instagram, facebook, vk,
    email: new FormControl<string>('', { validators: [Validators.email], nonNullable: true }),
    phones: new FormArray([new FormControl<string>('', { nonNullable: true })]),
    countryId: new FormControl<number | null>(null, [Validators.required]),
    cityName: new FormControl<string>(''),
    categoryId: new FormControl<number | null>(null, [Validators.required]),
    shortDescription: new FormControl<string>('', { validators: [Validators.required], nonNullable: true }),
    fullDescription: new FormControl<string>('', { validators: [Validators.required], nonNullable: true }),
  });

  public countriesFilter = new FormControl('');
  public categoriesFilter = new FormControl('');

  public create(data: Company): Observable<Company> {
    return this.http.post<Company>('/api/company/create', data);
  }
}
