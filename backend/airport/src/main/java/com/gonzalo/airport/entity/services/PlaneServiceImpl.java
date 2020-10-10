package com.gonzalo.airport.entity.services;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gonzalo.airport.entity.dao.IPlaneDao;
import com.gonzalo.airport.entity.models.Plane;


@Service
public class PlaneServiceImpl implements IPlaneService{
	@Autowired
	IPlaneDao planesDao;
	
	@Override
	public List<Plane> getAllPlanes() {
		return (List<Plane>) planesDao.findAll();
	}

	


	


	

	
	
}
