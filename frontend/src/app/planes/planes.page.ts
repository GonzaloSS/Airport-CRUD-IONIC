import { Component, OnInit } from '@angular/core';
import { Plane } from '../models/planes';
import { AirportsService } from '../services/airports.service';
@Component({
  selector: 'app-planes',
  templateUrl: './planes.page.html',
  styleUrls: ['./planes.page.scss'],
})
export class PlanesPage implements OnInit {

  plane: Plane[];

  constructor(private planeService: AirportsService) { }

  ngOnInit() {
    this.getAllPlanes();
  }
  getAllPlanes(){
    console.log("getAllPlanes");
    this.planeService.getPlanes().subscribe( plane => {
      console.log("inside");
      this.plane = plane;
      console.log(plane);
    });
  }
 

  }

