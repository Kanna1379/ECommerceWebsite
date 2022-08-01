import { Injectable } from '@angular/core';
import { Category } from '../common/category';
import { Product } from '../common/product';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EcommerceManagementService {


    producturl = "http://localhost:8080/api/prod"
    categoryurl = "http://localhost:8080/api/category"
    
    constructor( private httpclient : HttpClient){}
    
    getAllProduct() : Observable<Product[]>{
        console.log(this.httpclient.get<getProductResponse>(this.producturl).pipe(map(response => response._embedded.products)));
        return this.httpclient.get<getProductResponse>(this.producturl).pipe(map(response => response._embedded.products));
    }
    
    getAllCategory() : Observable<Category[]>{
        console.log(this.httpclient.get<getCategoryResponse>(this.categoryurl).pipe(map(response => response._embedded.categories)));
        return this.httpclient.get<getCategoryResponse>(this.categoryurl).pipe(map(response => response._embedded.categories));
    }
    saveProduct(product:Product): Observable<Product> {
      console.log(product);
  
  const httpOptions = {
      headers : new HttpHeaders({
      'Content-type' : 'application/json',
      'Authorization' : 'auth-token',
      'Access-Control-Allow-Origin' : '*'
  })
  }; 
  
  return this.httpclient.post<Product>(this.producturl,product,httpOptions);
  
  }
    }
    interface getProductResponse{
        _embedded:{
           products: Product[]
        }
}
interface getCategoryResponse{
  _embedded:{
      categories: Category[]
  }
}