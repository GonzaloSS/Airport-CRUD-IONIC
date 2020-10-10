package com.gonzalo.airport.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gonzalo.airport.entity.models.Booking;
import com.gonzalo.airport.entity.services.IAirportService;


@CrossOrigin(origins = "http://localhost:8100")

@RestController
public class AirportController {
	
	@Autowired
	IAirportService airportService;

	@GetMapping("/api/booking")
	private List<Booking> getAllBookings(){
		return airportService.getAllBookings();
	}
	@GetMapping("/api/booking/{id}")
	private Booking findById(@PathVariable(value = "id") int id) {
		return null;
	}
	
	@PostMapping("/api/booking")
	private void addBookings(Booking planes) {
		airportService.addBookings(planes);
	}
	
	@DeleteMapping("/api/booking/{id}")
	private void deleteBooking(@PathVariable(value = "id") int id) {
		airportService.deleteBooking(id);
	}
	
	@PutMapping("/api/booking/{id}")
	private void updateBooking(@PathVariable(value = "id") int id, Booking booking) {
		airportService.updateBicycle(id, booking);
	}
		
		
}
