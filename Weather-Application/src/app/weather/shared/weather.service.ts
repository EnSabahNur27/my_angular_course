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
  city: string;
  temperature: number;
  blahdata: any;

  constructor(private http: HttpClient) { }

  getWeather()  {
    const data = this.http.get(this.url).
      pipe(
        tap(a => this.blahdata = ${a} )
      );
    // const data = new JsonPipe().transform(this.http.get(this.url));
    console.log(data);
    return data;
  }
}
