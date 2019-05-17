import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JsonPipe } from '@angular/common';

import { Weathermodel } from '../weathermodel.model';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  url = 'api.openweathermap.org/data/2.5/find?q=Philadelphia&units=imperial';
  apiKey = '78bd47325f1fc25efba0ebb2f80717ba';

  constructor(private http: HttpClient) { }

  getWeather()  {
    return (this.http.get(this.url));
  }
}
