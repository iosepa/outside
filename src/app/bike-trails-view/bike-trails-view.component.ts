import { Component, OnInit } from '@angular/core';
import { LocationService } from '../location.service';
import { BikeTrailsService, bikeTrail } from '../bike-trails.service';

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


