import { Component, OnInit } from '@angular/core';
import { ProductCategory } from 'src/app/common/product-category';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  categoryModel : ProductCategory = new ProductCategory (0,"")
  onSubmit(categoryModel : ProductCategory) { 
    this.categoryModel = categoryModel;
    console.log(this.categoryModel);
  }

}
