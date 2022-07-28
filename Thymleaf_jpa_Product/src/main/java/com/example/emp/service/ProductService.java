package com.example.emp.service;


import java.util.List;

import com.example.emp.entity.Product;


public interface ProductService {
	
	public List<Product> findAll();
	public void save(Product e);
	public Product findById(Integer id);
	public void deleteById(Integer id);
}