import { Component, OnInit } from '@angular/core';
import { LocationService } from '../location.service';
import { BikeTrailsService, bikeTrail } from '../bike-trails.service';
import { Routes, RouterModule, Router, ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-bike-trails-view',
  templateUrl: './bike-trails-view.component.html',
  styleUrls: ['./bike-trails-view.component.sass']
})
export class BikeTrailsViewComponent implements OnInit {
  Lat: number;
  Long: number;
  myTrails: bikeTrail[];
  loading: boolean;

  constructor(private locationService: LocationService, private bikes: BikeTrailsService) {
      
    }

    
  ngOnInit() {
    this.loading = true;
    this.locationService.getLoc()
    .then((res: any) =>{
      this.Lat = res.lat;
      this.Long = res.long;
      this.bikes.findTrails(this.Lat, this.Long)
      .then((results: any) => {
        this.myTrails = results;
        this.myTrails.sort((t1,t2)=> t1.distance - t2.distance);
        this.loading = false;
      });
    })
  }

}


/*
 ngOnInit() {
    this.loading = true;
      let aTrail = new bikeTrail(
        "a trail", 
        4.6, 
        4, 
        "really really hard",
        45,
        34, 
        "./assets/images/cycle_path.jpg",
        "this is the funnest, funniest, funnerist trail out there",
        "https://funtrail.com",
        80,
      );
      let bTrail = new bikeTrail(
        "b trail", 
        2.3, 
        4, 
        "really really hard",
        44.04111,
        -91.66230, 
        "./assets/images/cycle_path.jpg",
        "this is the funnest, funniest, funnerist trail out there",
        "https://funtrail.com",
        80,
      );
      let cTrail = new bikeTrail(
        "c trail / or another name / or antoher really long", 
        3.3, 
        4, 
        "really really hard",
        45,
        34, 
        "./assets/images/cycle_path.jpg",
        "this is the funnest, funniest, funnerist trail out there",
        "https://funtrail.com",
        80,
      );
      this.myTrails = [aTrail, bTrail, cTrail];
      this.loading = false;
    }
  }
  */
  