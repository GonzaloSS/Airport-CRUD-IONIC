package com.gonzalo.airport.entity.dao;

import org.springframework.data.repository.CrudRepository;

import com.gonzalo.airport.entity.models.Booking;

public interface IBookingDao extends CrudRepository<Booking, Integer>{

}
