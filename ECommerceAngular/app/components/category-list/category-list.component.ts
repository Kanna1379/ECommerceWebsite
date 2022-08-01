import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Category } from 'src/app/common/category';
import { EcommerceManagementService } from 'src/app/services/ecommerce-management.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  constructor(private service : EcommerceManagementService) { }
  categories : Category[]
  ngOnInit(): void {
    this.listOfCategories()
  }

   listOfCategories(){
    this.service.getAllCategory().subscribe(data=>{
      console.log(data);
      this.categories = data;
    });
   }

   onSubmit(form:NgForm){
    this.categories.push(form.value);
   }

}
