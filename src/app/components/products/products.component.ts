import { Component, OnInit } from '@angular/core';
import {ProductItem} from './product-item/product-item.interface';

import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {MainState, selectProductsArray} from '../../store/reducers'
import {LoadProducts} from '../../store/actions/products.action';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit {
  products$: Observable<ProductItem[]>;
  constructor(private store: Store<MainState>) { }

  ngOnInit() {
    this.products$ = this.store.select(selectProductsArray);
    this.store.dispatch(new LoadProducts());
  }

}
