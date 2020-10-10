package com.gonzalo.airport.entity.services;

import java.util.List;



import com.gonzalo.airport.entity.models.Booking;

public interface IAirportService {
	public List<Booking> getAllBookings();
	public void addBookings(Booking booking);
	public void deleteBooking(int id);
	public void updateBicycle(int id, Booking booking);
}
