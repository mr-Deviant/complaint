import { Observable } from 'rxjs';

export interface ComplaintAddServiceInterface<T> {
  create(data: T): Observable<T>;
}
