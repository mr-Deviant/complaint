import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CompanyModel } from './company.model';
import { ComplaintAddServiceInterface } from '../../interfaces/complaint-add-service.interface';
// TODO: import { CreateCompanyDto } from '../../../../../backend/src/company/dto/create-company.dto';

@Injectable({
  providedIn: 'root',
})
export class CompanyService implements ComplaintAddServiceInterface<CompanyModel> {
  private http = inject(HttpClient);

  public create(data: CompanyModel): Observable<CompanyModel> {
    return this.http.post<CompanyModel>('/api/company/create', data);
  }
}
