import { Component, OnInit } from '@angular/core';
import { ProductCategory } from 'src/app/common/product-category';
import { ProductManagementService } from 'src/app/services/product-management.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  constructor(private service : ProductManagementService, private route:Router) { }

  ngOnInit(): void {
  }

  categoryModel : ProductCategory = new ProductCategory (0,"")
  onSubmit(categoryModel : ProductCategory) { 
    this.categoryModel = categoryModel;
    // console.log(categoryModel)
    this.service.saveCategory(this.categoryModel).subscribe(()=>{
      this.route.navigateByUrl("/categories")
    })
  }

}