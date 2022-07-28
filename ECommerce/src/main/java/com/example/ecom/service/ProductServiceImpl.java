package com.example.ecom.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.example.ecom.entity.Product;
import com.example.ecom.repository.ProductRepositoryImpl;

public class ProductServiceImpl implements ProductService  {
	@Autowired
	ProductRepositoryImpl pro;
		@Override
		
		public List<Product> findAll() {
			// TODO Auto-generated method stub
			
				
				return pro.findAll();
			}

			
			public Product findById(Integer id) {
				// TODO Auto-generated method stub
				return pro.findById(id);
			}
			
			public void saveOrUpdate(Product product) {
				pro.saveOrUpdate(product);
			}

}
