import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  lat: number;
  long: number;
  results = {
    temp:0,
    icon: '',
    name: '',
  }; 

  constructor(private http: HttpClient) {}
  
  findWeather(location){ //might want to switch this api in the future, not sure it is 100% reliable, but will work for this
    let promise = new Promise((resolve, reject) => {
      this.http
        .get(`https://fcc-weather-api.glitch.me/api/current?lat=${location.lat}&lon=${location.long}`)
        .toPromise()
        .then(
          (res: any) => {
            // Success
            this.results.name = res.name;
            this.results.icon = res.weather[0].icon;
            this.results.temp = Math.round(res.main.temp * 9/5 + 32);
            resolve(this.results);
          },
          msg => {
            // Error
            reject(msg);
          }
        );
    });
    return promise;
  }

}
