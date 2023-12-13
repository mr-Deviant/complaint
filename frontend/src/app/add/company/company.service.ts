import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from './company.model';
import { ComplaintAddService } from '../../interfaces/complaint-add-service';
// TODO: import { CreateCompanyDto } from '../../../../../backend/src/company/dto/create-company.dto';

@Injectable({
  providedIn: 'root',
})
export class CompanyService implements ComplaintAddService<Company> {
  private http = inject(HttpClient);

  public create(data: Company): Observable<Company> {
    return this.http.post<Company>('/api/company/create', data);
  }
}
