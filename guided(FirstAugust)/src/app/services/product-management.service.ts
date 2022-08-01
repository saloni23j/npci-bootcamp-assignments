import { Injectable } from '@angular/core';
import { Product } from '../common/product';
import { ProductCategory } from '../common/product-category';
import {Observable , map} from 'rxjs';
import {HttpClient,HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductManagementService {

  produrl = "http://localhost:8080/api/products"
  categoryurl = "http://localhost:8080/api/prodCategories"

  constructor(private httpClient : HttpClient) { }

  getAllProducts() : Observable<Product[]>{
      return this.httpClient.get<getProductResponse>(this.produrl).pipe(map((response:any) => response._embedded.products))
  }
  getAllCategories() : Observable<ProductCategory[]>{
    return this.httpClient.get<getCategoryResponse>(this.categoryurl).pipe(map((response:any) => response._embedded.productCategories))
}

saveProduct(product : Product): Observable<Product>{
  console.log(product)
  const httpOptions = {
    headers : new HttpHeaders({ 
    'Content-type' : 'application/json',
    'Authorization' : 'auth-token',
    'Access-Control-Allow-Origin': '*'})
   
  }
  return this.httpClient.post<Product>(this.produrl,product,httpOptions)
} 

saveCategory(category : ProductCategory): Observable<ProductCategory>{
  console.log(category)
  const httpOptions = {
    headers : new HttpHeaders({ 
    'Content-type' : 'application/json',
    'Authorization' : 'auth-token',
    'Access-Control-Allow-Origin': '*'})
   
  }
  return this.httpClient.post<ProductCategory>(this.categoryurl,category,httpOptions)
}

}

interface getProductResponse{
  _embedded : {
    products : Product[]
  }
}
  interface getCategoryResponse{
    _embedded : {
      productCategories : ProductCategory[]
    }
}