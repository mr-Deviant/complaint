import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ComplaintType } from '../../types/complaint.type';

@Injectable({
  providedIn: 'root',
})
export class AddComplaintService {
  private http = inject(HttpClient);

  public create(data: ComplaintType): Observable<ComplaintType> {
    return this.http.post<ComplaintType>('/api/complaint/create', data);
  }
}
