import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ComplaintType } from '../types/complaint.type';

@Injectable({
  providedIn: 'root',
})
export class ComplaintService {
  private http = inject(HttpClient);

  public create(data: ComplaintType): Observable<ComplaintType> {
    return this.http.post<ComplaintType>('/api/complaint', data);
  }

  public getCountriesAndCities(): Observable<any> { // TODO: any
    return this.http.get<any>('/api/complaint/countries');
  }

  public getComplaint(id: string | null): Observable<ComplaintType> {
    return this.http.get<ComplaintType>(`/api/complaint/${id}`);
  }

  public getLast(limit: number = 3): Observable<ComplaintType[]> {
    return this.http.get<any>(`/api/complaint/last/${limit}`);
  }
}
