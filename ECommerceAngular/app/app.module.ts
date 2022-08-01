import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import {FormsModule} from '@angular/forms';
import { CategoryFormComponent } from './components/category-form/category-form.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { Routes,RouterModule } from '@angular/router';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { BuyerComponent } from './components/buyer/buyer.component';


const route : Routes = [
  {path: '', component: WelcomeComponent},
  {path : 'merchant', component: ProductListComponent},
  {path : 'categories', component: CategoryListComponent },
  {path: 'productform', component: ProductFormComponent},
  {path: 'shop', component:BuyerComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    CategoryListComponent,
    CategoryFormComponent,
    WelcomeComponent,
    ProductFormComponent,
    BuyerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(route)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
