import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
//import { MDBBootstrapModule } from 'angular-bootstrap-md';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherViewComponent } from './weather-view/weather-view.component';
import { WeatherService } from './weather.service';
import { LocationService } from './location.service';
import { HttpClientModule } from '@angular/common/http';
import { BikeTrailsViewComponent } from './bike-trails-view/bike-trails-view.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherViewComponent,
    BikeTrailsViewComponent,
  ],
  imports: [
    //MDBBootstrapModule.forRoot()
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [WeatherService, LocationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
