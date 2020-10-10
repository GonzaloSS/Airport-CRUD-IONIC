package com.gonzalo.airport.entity.services;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gonzalo.airport.entity.dao.IBusinessDao;
import com.gonzalo.airport.entity.models.Business;


@Service
public class BusinessServiceImpl implements IBusinessService{
	@Autowired
	IBusinessDao businessDao;
	
	@Override
	public List<Business> getAllBusiness() {
		return (List<Business>) businessDao.findAll();
	}
	
	


	


	

	
	
}
