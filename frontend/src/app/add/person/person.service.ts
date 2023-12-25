import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PersonModel } from './person.model';
import { ComplaintAddServiceInterface } from '../../interfaces/complaint-add-service.interface';

@Injectable({
  providedIn: 'root',
})
export class PersonService implements ComplaintAddServiceInterface<PersonModel> {
  private http = inject(HttpClient);

  public create(data: PersonModel): Observable<PersonModel> {
    return this.http.post<PersonModel>('/api/person/create', data);
  }
}
