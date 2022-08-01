import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/common/product';
import { EcommerceManagementService } from 'src/app/services/ecommerce-management.service';

@Component({
  selector: 'app-buyer',
  templateUrl: './buyer.component.html',
  styleUrls: ['./buyer.component.css']
})
export class BuyerComponent implements OnInit {

  
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
}
