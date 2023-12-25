import { inject, Injectable } from '@angular/core';
import { ComplaintAddServiceInterface } from '../../interfaces/complaint-add-service.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductModel } from './product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService implements ComplaintAddServiceInterface<ProductModel> {
  private http = inject(HttpClient);

  public create(data: ProductModel): Observable<ProductModel> {
    return this.http.post<ProductModel>('/api/product/create', data);
  }
}
