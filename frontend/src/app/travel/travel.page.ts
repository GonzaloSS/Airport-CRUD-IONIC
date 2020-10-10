import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Plane } from '../models/planes';
import { Business } from '../models/business';
import { AirportsService } from '../services/airports.service';
@Component({
  selector: 'app-travel',
  templateUrl: './travel.page.html',
  styleUrls: ['./travel.page.scss'],
})
export class TravelPage implements OnInit {

  plane: Plane[];
  business: Business[];
  bookingForm: FormGroup;

  constructor(public fb: FormBuilder,
    private bookingService: AirportsService,
    private router: Router) {
      this.bookingForm = this.fb.group({
        name: [''],
        surname: [''],
        dni: [''],
        year:[],
        plane:[''],
        business:['']

      })
     }

  ngOnInit() {
    this.getAllPlanes();
    this.getAllBusiness();
  }

  getAllPlanes(){
    console.log("getAllPlanes");
    this.bookingService.getPlanes().subscribe( plane => {
      
      this.plane = plane;
      
    });
  }
  getAllBusiness(){
    console.log("getAllBusiness");
    this.bookingService.getBusiness().subscribe( business => {
      
      this.business = business;
      
    });
  }

  onFormSubmit() {
    if (!this.bookingForm.valid) {
      return false;
    } else {
      let booking = {
        id: null,
        name: this.bookingForm.value.name,
        surname: this.bookingForm.value.surname,
        dni: this.bookingForm.value.dni,
        year: this.bookingForm.value.year,
        plane: this.bookingForm.value.plane,
        business: this.bookingForm.value.business
      }
      this.bookingService.addBooking(booking)
        .subscribe((res) => {
          this.router.navigateByUrl("/history")
          });
        }
  }



  }

