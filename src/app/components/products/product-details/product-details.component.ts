import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';

import {MainState} from '../../../store/reducers';
import {ProductItem} from '../product-item/product-item.interface';
import {selectProducFromRouting} from '../../../store/selectors'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html'
})
export class ProductDetailsComponent implements OnInit {
  product$: Observable<ProductItem>;
  product: ProductItem;
  constructor(private store: Store<MainState>) { }

  ngOnInit() {
    this.product$ = this.store.select(selectProducFromRouting);
    this.product$.subscribe(product => this.product = product);
  }

}
