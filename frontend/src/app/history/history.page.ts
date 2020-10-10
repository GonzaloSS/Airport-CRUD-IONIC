import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Booking } from '../models/booking';
import { AirportsService } from '../services/airports.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {

  booking: Booking[];
  constructor(private bookingService: AirportsService, private route: Router) { }

  ngOnInit() {
    this.getAllBookings();
  }

  getAllBookings(){
    console.log("getAllBookings");
    this.bookingService.getBookings().subscribe( booking => {
      console.log("inside");
      this.booking = booking;
      console.log(booking);
    });
  }

  goToBookings(){
    this.route.navigateByUrl('/travel');
  }

  deleteBooking(id:number){
    this.bookingService.deleteBooking(id).subscribe(() => {
      this.getAllBookings();
    })
  }

  updateBooking(id:number){
    this.bookingService.setCurrentBookingId(id);
    this.route.navigateByUrl("update-booking");
    }
  }


  
