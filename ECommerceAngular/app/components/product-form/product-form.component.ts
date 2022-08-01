import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from 'src/app/common/category';
import { Product } from 'src/app/common/product';
import { EcommerceManagementService } from 'src/app/services/ecommerce-management.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  product : Product = new Product (0,"","","",0,"",0,0,new Date(),new Date(),0)
  categories: Category[]
  constructor(private service : EcommerceManagementService,private route:Router) { }
  ngOnInit(): void {
    this.listOfCategories()
  }

   listOfCategories(){
    this.service.getAllCategory().subscribe(data=>{
      console.log(data);
      this.categories = data;
    })
   }

   onSubmit(form:NgForm){
    this.service.saveProduct(this.product).subscribe(data =>{
      console.log(data)
      this.route.navigateByUrl("/products")
   });
}
}
