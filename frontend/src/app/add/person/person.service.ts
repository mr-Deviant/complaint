import {inject, Injectable} from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from './person.model';
import { ComplaintAddService } from '../../interfaces/complaint-add-service';

@Injectable({
  providedIn: 'root',
})
export class PersonService implements ComplaintAddService<Person> {
  private http = inject(HttpClient);

  public create(data: Person): Observable<Person> {
    return this.http.post<Person>('/api/person/create', data);
  }
}
