import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/common/product';
import { ProductCategory } from 'src/app/common/product-category';
import { ProductManagementService } from 'src/app/services/product-management.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buy-product',
  templateUrl: './buy-product.component.html',
  styleUrls: ['./buy-product.component.css']
})
export class BuyProductComponent implements OnInit {

  constructor(private service : ProductManagementService) { }
  productList:Product[] = [];
  ngOnInit(): void {
    this.listOfProducts()
  }

listOfProducts(){
  this.service.getAllProducts().subscribe((data:any)=>{
    console.log(data);
    this.productList = data;
  })
}

}
