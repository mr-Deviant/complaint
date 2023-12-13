import { Observable } from 'rxjs';

export interface ComplaintAddService<T> {
  create(data: T): Observable<T>;
}
