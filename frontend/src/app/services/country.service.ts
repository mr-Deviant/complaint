import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CountryModel } from '../models/country.model';
import { CityModel } from '../models/city.model';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private http = inject(HttpClient);

  public readAll(): Observable<CountryModel[]> {
    return this.http.get<CountryModel[]>('/api/country');
  }

  public getCountryAndCities(countryCode: string | null): Observable<any> { // TODO: any
    return this.http.get<any>(`/api/country/${countryCode}`);
  }

  public readCitiesByCountry(countryCode: string): Observable<CityModel[]> {
    return this.http.get<CityModel[]>(`/api/country/${countryCode}/city`);
  }
}
