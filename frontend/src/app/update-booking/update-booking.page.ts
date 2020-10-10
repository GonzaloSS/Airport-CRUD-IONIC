import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Business } from '../models/business';
import { Plane } from '../models/planes';
import { AirportsService } from '../services/airports.service';

@Component({
  selector: 'app-update-booking',
  templateUrl: './update-booking.page.html',
  styleUrls: ['./update-booking.page.scss'],
})
export class UpdateBookingPage implements OnInit {

  plane: Plane[];
  business: Business[];
  updateBookingForm: FormGroup;

  constructor(public fb: FormBuilder,
    private bookingService: AirportsService,
    private router: Router) {
      this.updateBookingForm = this.fb.group({
        name: [''],
        surname: [''],
        dni: [''],
        year:[''],
        plane:[''],
        business:['']

      })
     }

  ngOnInit() {
    let id = this.bookingService.getCurrentBookingId();
  
    this.bookingService.getBookingById(id).subscribe((b) => {
      this.updateBookingForm.setValue({
        name: [''],
        surname: [''],
        dni: [''],
        year:[''],
        plane:[''],
        business:['']
      })
    })
    
  
  
    this.getAllBusiness();
    this.getAllPlanes();
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
    if (!this.updateBookingForm.valid) {
      return false;
    } else {
      let id = this.bookingService.getCurrentBookingId();
      console.log(id);
      let booking = {
        id: null,
        name: this.updateBookingForm.value.name,
        surname: this.updateBookingForm.value.surname,
        dni: this.updateBookingForm.value.dni,
        year: this.updateBookingForm.value.year,
        plane: this.updateBookingForm.value.plane,
        business: this.updateBookingForm.value.business
      }
      this.bookingService.updateBooking(id, booking)
        .subscribe((res) => {
          this.router.navigateByUrl("/history")
          });
        }
  }
}
