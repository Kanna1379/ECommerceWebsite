import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Category } from 'src/app/common/category';
import { Product } from 'src/app/common/product';
import { EcommerceManagementService } from 'src/app/services/ecommerce-management.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products : Product[]

  constructor(private service : EcommerceManagementService) { }

  ngOnInit(): void {
    this.listOfProducts()
  }

   listOfProducts(){
    this.service.getAllProduct().subscribe(data=>{
      console.log(data);
      this.products = data;
    });
   }
 

   onSubmit(form:NgForm){
    this.products.push(form.value)
   }
}
