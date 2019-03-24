import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

export class bikeTrail {
  constructor (
  public name: string,
  public rating: number,
  public length: number,
  public difficulty: string,
  public lat: number,
  public long: number,
  public img: string,
  public description: string,
  public link: string,
  public distance: number,
  ){}
}


@Injectable({
  providedIn: 'root'
})
export class BikeTrailsService {
trails: bikeTrail[];

  constructor(private http: HttpClient) { }

  findTrails(lat, long) {
    let promise = new Promise((resolve, reject) => {
      this.http
        .get(`https://trailapi-trailapi.p.rapidapi.com/trails/explore/?lat=${lat}&lon=${long}`,
        {
          headers: new HttpHeaders().set("X-RapidAPI-Key", "b2f714b446msh356c3f7a7b4ecd8p1b1453jsnfc7e5f691eec")
        })
        .toPromise()
        .then(
          (res: any) => {
            // Success
            this.trails = res.data.map((aTrail: any)=>{
              return new bikeTrail(
                aTrail.name,
                aTrail.rating,
                aTrail.length,
                aTrail.difficulty,
                aTrail.lat,
                aTrail.lon,
                aTrail.thumbnail && aTrail.thumbnail.indexOf('no_photo')<0 ? aTrail.thumbnail : "./assets/images/cycle_path.jpg",
                aTrail.description,
                aTrail.url,
                this.getDistance(lat, long, aTrail.lat, aTrail.lon),
              )
            })
            console.log(res)
            resolve(this.trails);
          },
          msg => {
            // Error
            reject(msg);
          }
        );
    });
    return promise;
  }
  getDistance(lat1,lon1,lat2,lon2) {
    const R = 3959; // Radius of the earth in miles
    const dLat = this.deg2rad(lat2-lat1);  // deg2rad below
    const dLon = this.deg2rad(lon2-lon1); 
    let a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2)
      ; 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c; // Distance in km
    return parseFloat(d.toFixed(1));
  }
  
  deg2rad(deg) {
    return deg * (Math.PI/180)
  }

}
