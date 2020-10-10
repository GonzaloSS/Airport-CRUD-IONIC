package com.gonzalo.airport.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gonzalo.airport.entity.models.Plane;
import com.gonzalo.airport.entity.services.IPlaneService;


@CrossOrigin(origins = "http://localhost:8100")

@RestController
public class PlaneController {
	
	@Autowired
	IPlaneService planeService;

	@GetMapping("/api/planes")
	private List<Plane> getAllPlanes(){
		return planeService.getAllPlanes();
	}
	
	
		
		
}
