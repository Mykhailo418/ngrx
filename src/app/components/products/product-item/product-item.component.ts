import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import {ProductItem} from './product-item.interface';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductItemComponent {
  @Input('product') product: ProductItem;
  constructor() { }
}
