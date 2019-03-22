import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

class Location {
  constructor(
    public lat: number,
    public long: number,
  ){}
}

@Injectable()
export class LocationService {
  results: Location;
  loading: boolean;

  constructor() {
    this.loading = false;
  }

  getLoc() {
    let promise = new Promise((resolve, reject) => {

    if (this.results){
      resolve(this.results);
    }
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
            //do success handling
            this.results = new Location(
              position.coords.latitude,
              position.coords.longitude,
            )
            resolve(this.results);
        },
        error => {
            //do error handling
            console.log("we have a problem" + error.message);
            reject();
        },
        {
            timeout: 30000, enableHighAccuracy: true, maximumAge: 75000 
        });
      }
    });
    return promise;
  }

}