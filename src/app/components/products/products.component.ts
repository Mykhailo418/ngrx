import { Component, OnInit } from '@angular/core';
import {ProductItem} from './product-item/product-item.interface';
import {ProductsService} from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit {
  products: ProductItem[];
  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.productsService.getProducts().subscribe(
      products => this.products = products;
    );
  }

}
