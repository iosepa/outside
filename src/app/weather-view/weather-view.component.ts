import { Component, OnChanges, OnInit } from '@angular/core';
import {WeatherService} from '../weather.service';
import { LocationService } from '../location.service';
import { BikeTrailsService } from '../bike-trails.service';

@Component({
  selector: 'app-weather-view',
  templateUrl: './weather-view.component.html',
  styleUrls: ['./weather-view.component.sass']
})
export class WeatherViewComponent implements OnInit, OnChanges {
 Lat: number;
 Long: number;
  weatherInfo = {
    temp:0,
    icon: '',
    name: '',
  }; 
  loading: boolean;

  constructor(private locationService: LocationService, private weatherService: WeatherService, private bikes: BikeTrailsService) {
  }

  ngOnInit() {
    this.loading = true; 
    this.locationService.getLoc()
      .then((res: any)=>{
        this.Lat = res.lat;
        this.Long = res.long;
        this.weatherService.findWeather(res)
        .then((res2: any) => {
          this.weatherInfo.temp = res2.temp;
          this.weatherInfo.name = res2.name;
          this.weatherInfo.icon = res2.icon;
          this.loading = false;
        })
      })
  }


  ngOnChanges(): void {
    //console.log('changes' + this.weatherService.lat);
    
    }

    
}


