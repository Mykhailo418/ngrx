import { Component, OnInit, Input } from '@angular/core';
import {ProductItem} from './product-item.interface';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html'
})
export class ProductItemComponent implements OnInit {
  @Input('product') product: ProductItem;
  constructor() { }

  ngOnInit() {
    //console.log(this.product);
  }

}
