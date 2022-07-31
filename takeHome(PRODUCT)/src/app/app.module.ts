import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { ProdListComponent } from './components/prod-list/prod-list.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { WelcomeComponent } from './components/welcome/welcome.component';


const route : Routes = [
  {path : '', component : WelcomeComponent },
   {path : 'products', component : ProdListComponent},
   {path: 'categories', component : CategoryListComponent},
   {path: 'addProduct', component : AddProductComponent},
   {path: 'addCategory', component : AddCategoryComponent}
 ]

@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    AddCategoryComponent,
    ProdListComponent,
    CategoryListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(route)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
