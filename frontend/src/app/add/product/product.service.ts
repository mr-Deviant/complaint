import { inject, Injectable } from '@angular/core';
import { ComplaintAddService } from '../../interfaces/complaint-add-service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService implements ComplaintAddService<Product> {
  private http = inject(HttpClient);

  public create(data: Product): Observable<Product> {
    return this.http.post<Product>('/api/product/create', data);
  }
}
