import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
//import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { Routes, RouterModule, Router, ActivatedRoute } from "@angular/router";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherViewComponent } from './weather-view/weather-view.component';
import { WeatherService } from './weather.service';
import { LocationService } from './location.service';
import { HttpClientModule } from '@angular/common/http';
import { BikeTrailsViewComponent } from './bike-trails-view/bike-trails-view.component';
import { TrailViewComponent } from './trail-view/trail-view.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: BikeTrailsViewComponent },
  { path: "trail", component: TrailViewComponent },
  { path: "**", component: BikeTrailsViewComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    WeatherViewComponent,
    BikeTrailsViewComponent,
    TrailViewComponent,
  ],
  imports: [
    //MDBBootstrapModule.forRoot()
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,    
    RouterModule.forRoot(routes, { useHash: true }),
  ],
  providers: [WeatherService, LocationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
