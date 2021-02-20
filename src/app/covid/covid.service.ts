import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Covid } from './covid.interfaces';

@Injectable({
  providedIn: 'root',
})
export class CovidService {
  API_URL =
    'https://api.apify.com/v2/key-value-stores/TyToNta7jGKkpszMZ/records/LATEST?disableRedirect=true';

  constructor(private http: HttpClient) {}

  getCovidData(): Observable<Covid> {
    return this.http.get<Covid>(this.API_URL);
  }
}
