import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/common/product';
import { ProductCategory } from 'src/app/common/product-category';
import { ProductManagementService } from 'src/app/services/product-management.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  categories : ProductCategory[] = [];
  constructor(private service : ProductManagementService, private route:Router) { }

  ngOnInit(): void {
    this.listOfCategories()
  }

  listOfCategories(){
    this.service.getAllCategories().subscribe((data:any)=>{
      this.categories = data
    })
  }

  productModel : Product = new Product (0,"","","",0,"",new Date(Date.now()),new Date(Date.now()),0)
  onSubmit(productModel : Product) { 
    this.productModel = productModel;
    this.service.saveProduct(this.productModel).subscribe(()=>{
      this.route.navigateByUrl("/products")
    })
  }

}