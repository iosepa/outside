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

  hasLoc() {
    if (this.results){
      return true
    }
    return false
  }

  getLoc() {
    let promise = new Promise((resolve, reject) => {

    if (this.results){ //don't call if location is already found
      resolve(this.results);
      return promise;
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
            console.log("There was a problem: " + error.message);
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
