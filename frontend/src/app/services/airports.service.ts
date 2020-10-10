import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import {Booking} from '../models/booking';
import { Observable, of } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { Plane } from '../models/planes';
import { Business } from '../models/business';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded'
})
};
const apiUrlBooking = 'http://localhost:8080/api/booking';
const apiUrlPlane = 'http://localhost:8080/api/planes';
const apiUrlBusiness = 'http://localhost:8080/api/business';

@Injectable({
  providedIn: 'root'
})
export class AirportsService {

  currentBookingId: number;

  constructor(private http: HttpClient) { }


  getBookings(): Observable<Booking[]> {
    return this.http.get<Booking[]>(apiUrlBooking)
      .pipe(
        tap(booking => console.log('fetched bookings')),
        catchError(this.handleError('getBookings', []))
      );
  }

  getPlanes(): Observable<Plane[]> {
    return this.http.get<Plane[]>(apiUrlPlane)
      .pipe(
        tap(booking => console.log('fetched planes')),
        catchError(this.handleError('getplanes', []))
      );
  }
  getBusiness(): Observable<Business[]> {
    return this.http.get<Business[]>(apiUrlBusiness)
      .pipe(
        tap(booking => console.log('fetched planes')),
        catchError(this.handleError('getplanes', []))
      );
  }

  setCurrentBookingId(id: number){
    this.currentBookingId = id;
  }

  getCurrentBookingId(): number{
    return this.currentBookingId;
    }

    getBookingById(id: number): Observable<Business>{
      return this.http.get<Business>(apiUrlBooking + "/" + id);
    }

  addBooking(booking: Booking): Observable<any>{

    let  bodyEncoded = new URLSearchParams();
    bodyEncoded.append("name", booking.name);
    bodyEncoded.append("surname", booking.surname);
    bodyEncoded.append("year", booking.year);
    bodyEncoded.append("plane", booking.plane);
    bodyEncoded.append("business", booking.business);
    bodyEncoded.append("dni", booking.dni);
    let body = bodyEncoded.toString();
 
     return this.http.post(apiUrlBooking, body, httpOptions)
   }



  updateBooking(id: number, booking: Booking): Observable<any>{
    let  bodyEncoded = new URLSearchParams();
    bodyEncoded.append("name", booking.name);
    bodyEncoded.append("surname", booking.surname);
    bodyEncoded.append("year", booking.year);
    bodyEncoded.append("plane", booking.plane);
    bodyEncoded.append("business", booking.business);
    bodyEncoded.append("dni", booking.dni);
   let body = bodyEncoded.toString();
    return this.http.put(apiUrlBooking + "/" + id, body, httpOptions );
  }
  



  deleteBooking(id: number): Observable<any>{
    return this.http.delete(apiUrlBooking +"/" + id);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
