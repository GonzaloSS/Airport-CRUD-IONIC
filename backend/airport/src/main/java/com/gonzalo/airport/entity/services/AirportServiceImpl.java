package com.gonzalo.airport.entity.services;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gonzalo.airport.entity.dao.IBookingDao;
import com.gonzalo.airport.entity.models.Booking;


@Service
public class AirportServiceImpl implements IAirportService{
	@Autowired
	IBookingDao bookingDao;
	
	@Override
	public List<Booking> getAllBookings() {
		return (List<Booking>) bookingDao.findAll();
	}
	
	@Override
	public void addBookings(Booking booking) {
		bookingDao.save(booking);
	}

	@Override
	public void deleteBooking(int id) {
		bookingDao.deleteById(id);
		
	}

	@Override
	public void updateBicycle(int id, Booking booking) {
		Optional<Booking> b = bookingDao.findById(id);
		
		if (b.isPresent()) {
			booking.setId(id);
			bookingDao.save(booking);
		}
		
	}


	


	

	
	
}
