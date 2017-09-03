import { Product } from './Product';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  title: string;
  isVisible:boolean=true;

  productList: Product[] = [
    { id: 1, name: "Apple", price: 100, qty: 12 },
    { id: 2, name: "Mango", price: 300, qty: 12 },
    { id: 3, name: "Pineapple", price: 50, qty: 1 },
    { id: 4, name: "Orange", price: 180, qty: 12 }
  ];


  constructor() { }

  ngOnInit() {
    this.title = "Angular2"
  }

  updateTitle() {
    this.title = "Angular4"
  }

  reverseTitle() {
    this.title = "Angular2"
  }

}
