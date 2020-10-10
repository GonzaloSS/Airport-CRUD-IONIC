package com.gonzalo.airport.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import com.gonzalo.airport.entity.models.Business;
import com.gonzalo.airport.entity.services.IBusinessService;


@CrossOrigin(origins = "http://localhost:8100")

@RestController
public class BusinessController {
	
	@Autowired
	IBusinessService businessService;

	@GetMapping("/api/business")
	private List<Business> getAllBusiness(){
		return businessService.getAllBusiness();
	}
	
		
}
