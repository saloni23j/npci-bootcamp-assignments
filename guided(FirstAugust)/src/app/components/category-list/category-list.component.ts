import { Component, OnInit } from '@angular/core';
import { ProductManagementService } from 'src/app/services/product-management.service';
import { ProductCategory } from 'src/app/common/product-category';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  constructor(private service : ProductManagementService) { }
  
  categoryList:ProductCategory[] = [];
  ngOnInit(): void {
    this.listOfCategories()
  }

listOfCategories(){
  this.service.getAllCategories().subscribe((data:any)=>{
    console.log(data);
    this.categoryList = data;
  })
}

}
