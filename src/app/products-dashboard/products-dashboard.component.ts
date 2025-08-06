import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/services/product.service';
import { Product } from '../shared/model/product.model';

@Component({
  selector: 'app-products-dashboard',
  templateUrl: './products-dashboard.component.html',
  styleUrls: ['./products-dashboard.component.scss']
})
export class ProductsDashboardComponent implements OnInit{
  productArr : Product[] = [];
  constructor(private _productServ : ProductService){}
  ngOnInit(): void {
    this.fetchProductData()
  }
  fetchProductData(){
    this._productServ.fetchProductData().subscribe({
      next : (data) =>{
        this.productArr = data
      },
      error : (err) => console.log(err)
      
    })
  }
}
