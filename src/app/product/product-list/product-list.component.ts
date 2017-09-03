import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../Product'
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() productList: Array<Product>;
  @Input() title: string;
  @Output() isVisible = new EventEmitter<boolean>();
  tableVisible: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  toggleTable() {
    this.tableVisible = !this.tableVisible;
    this.isVisible.emit(this.tableVisible);
  }



}
