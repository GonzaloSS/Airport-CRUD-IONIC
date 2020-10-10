package com.gonzalo.airport.entity.dao;

import org.springframework.data.repository.CrudRepository;

import com.gonzalo.airport.entity.models.Business;

public interface IBusinessDao extends CrudRepository<Business, Integer>{

}
