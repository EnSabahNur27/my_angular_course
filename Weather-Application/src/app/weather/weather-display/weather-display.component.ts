import { Component, OnInit } from '@angular/core';
import { CityWeatherCardComponent } from '../city-weather-card/city-weather-card.component';
import { Weathermodel } from '../weathermodel.model';
import { WeatherService } from '../shared/weather.service';

@Component({
  selector: 'app-weather-display',
  templateUrl: './weather-display.component.html',
  styleUrls: ['./weather-display.component.css']
})
export class WeatherDisplayComponent implements OnInit {

  city: string;
  weatherCard: any;
  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.getWeather();
  }

  getWeather()  {
    this.weatherCard = this.weatherService.getWeather();
  }

}
