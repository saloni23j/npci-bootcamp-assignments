package com.example.emp.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.emp.entity.Product;
import com.example.emp.repository.ProductRepository;

@Service
public class ProductServiceImpl implements ProductService {

	@Autowired
	private ProductRepository repository;

	public List<Product> findAll() {

		return repository.findAll(); 
	}

	public void save(Product p) {
		repository.save(p);
	}

	public Product findById(Integer id) {

		Optional<Product> p = repository.findById(id);
		Product product = null;

		if (p.isPresent())
			product = p.get();

		return product;
	}

	public void deleteById(Integer id) {
		repository.deleteById(id);

	}

}