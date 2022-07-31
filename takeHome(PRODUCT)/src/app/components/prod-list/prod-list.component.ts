import { Component, OnInit } from '@angular/core';
import { ProductManagementService } from 'src/app/services/product-management.service';
import { Product } from 'src/app/common/product';

@Component({
  selector: 'app-prod-list',
  templateUrl: './prod-list.component.html',
  styleUrls: ['./prod-list.component.css']
})
export class ProdListComponent implements OnInit {

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
