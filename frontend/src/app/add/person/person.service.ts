import { Injectable } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from './person.model';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  constructor(private http: HttpClient) {}

  public form = new FormGroup({
    // photos
    surname: new FormControl<string>('', { nonNullable: true }),
    name: new FormControl<string>('', { nonNullable: true }),
    patronymic: new FormControl<string>('', { nonNullable: true }),
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

  public create(data: Person): Observable<Person> {
    return this.http.post<Person>('/api/person/create', data);
  }
}
