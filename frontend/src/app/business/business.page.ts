import { Component, OnInit } from '@angular/core';
import { Business } from '../models/business';
import { AirportsService } from '../services/airports.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.page.html',
  styleUrls: ['./business.page.scss'],
})
export class BusinessPage implements OnInit {

  business: Business[];

  constructor(private businessService: AirportsService) { }

  ngOnInit() {
    this.getAllBusiness();
  }
  getAllBusiness(){
    this.businessService.getBusiness().subscribe( business => {
      
      this.business = business;
  });
}
  
}
