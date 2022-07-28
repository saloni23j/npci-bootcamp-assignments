package com.example.ecom.repository;
import java.util.*;
import com.example.ecom.entity.Product;


public interface ProductRepository {
	public List<Product> findAll();
	public Product findById(Integer id);
	public void saveOrUpdate(Product product);
	
	
	public void deleteById(int empId);
}
