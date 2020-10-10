package com.gonzalo.airport.entity.dao;

import org.springframework.data.repository.CrudRepository;

import com.gonzalo.airport.entity.models.Plane;

public interface IPlaneDao extends CrudRepository<Plane, Integer>{

}
