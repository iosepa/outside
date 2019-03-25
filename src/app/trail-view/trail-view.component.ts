import { Component, OnInit } from '@angular/core';
import { LocationService } from '../location.service';
import { BikeTrailsService, bikeTrail } from '../bike-trails.service';
import { Routes, RouterModule, Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-trail-view',
  templateUrl: './trail-view.component.html',
  styleUrls: ['./trail-view.component.sass']
})
export class TrailViewComponent implements OnInit {

  Lat: number;
  Long: number;
  myTrails: bikeTrail[];
  loading: boolean;
  thisTrail: bikeTrail;
  id: number;

  constructor(private locationService: LocationService, private bikes: BikeTrailsService,  private route: ActivatedRoute,
    private router: Router) {
    this.route.params.subscribe(params => {
      this.id = params.id;
    });
  }

  
  ngOnInit() {
    if (!this.bikes.haveTrails()) { 
      this.loading = true;
      this.bikes.getTrail(this.id)
      .then((results: any) => {
        this.thisTrail = results;
        this.loading = false;
      });
    }
    else { //we already have the api call
      this.loading = true;
      this.locationService.getLoc()
      .then((res: any) =>{
        this.Lat = res.lat;
        this.Long = res.long;
        this.bikes.findTrails(this.Lat, this.Long)
        .then((results: any) => {
          this.myTrails = results;
          this.thisTrail = this.myTrails.filter(trail => trail.id === this.id)[0];
          this.loading = false;
        });
      })
    }
  }
}


/*
  ngOnInit() {

    this.thisTrail = new bikeTrail(
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


  }
}
*/
