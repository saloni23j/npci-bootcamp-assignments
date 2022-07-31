import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/common/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  productModel : Product = new Product (0,"","","",0,"",new Date(Date.now()),new Date(Date.now()),0)
  onSubmit(productModel : Product) { 
    
    this.productModel = productModel;
    console.log(this.productModel);
  }

}
