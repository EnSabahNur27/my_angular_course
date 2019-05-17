import { Component, OnInit, Input } from '@angular/core';

import { Weathermodel } from '../weathermodel.model';

@Component({
  selector: 'app-city-weather-card',
  templateUrl: './city-weather-card.component.html',
  styleUrls: ['./city-weather-card.component.css']
})
export class CityWeatherCardComponent implements OnInit {


  @Input()
  weatherCard: Weathermodel;

  constructor() { }

  ngOnInit() {
  }

}
