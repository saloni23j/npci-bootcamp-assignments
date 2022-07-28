package com.example.ecom.controller;
import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.ecom.service.ProductService;
import com.example.ecom.entity.Product;
import com.example.ecom.service.ProductService;


@RestController
@RequestMapping("/product")
public class EcommerceController {
	

	@Autowired
	
	private ProductService proService;
	
	
	@GetMapping("/ProductList")
	public List<Product> findAll(){
		return proService.findAll();
	}
	
	@PutMapping("/updateProduct")
	public String updateProduct(@RequestBody Product pro) throws Exception {
	
		
		ProductService.saveOrUpdate(pro);
		
		return "Category ID : "+ pro.getCategoryid() + " Details updated Succesfully !!"; 
	}

	@DeleteMapping("pro/{id}")
	public String deleteById(@PathVariable int id) {
		ProductService.deleteById(id);
		return "Product ID : " + id +"details  deleted !!!";
	}
	
	@PostMapping("/saveProduct")
	public String saveProduct(@RequestBody Product product)
	{
		ProductService.saveOrUpdate(product);
		return "Product Details added successfully";
		
	}

}
