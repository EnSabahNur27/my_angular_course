import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherDisplayComponent } from './weather/weather-display/weather-display.component';
import { CityWeatherCardComponent } from './weather/city-weather-card/city-weather-card.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherDisplayComponent,
    CityWeatherCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
