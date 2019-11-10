import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, catchError } from 'rxjs/operators';
import {of} from 'rxjs';
import {ProductsService} from '../../services/products.service';
import {LOAD_PRODUCTS, LoadProductsSuccess, LoadProductsError} from '../actions/products.action';
import {ProductItem} from '../../components/products/product-item/product-item.interface';

@Injectable()
export class ProductsEffects {
  loadProducts$ = createEffect(() => this.actions$.pipe(
    ofType(LOAD_PRODUCTS),
    switchMap(() => this.productsSvc.getProducts().pipe(
      map((products: ProductItem[]) => new LoadProductsSuccess(products)),
      catchError((err: any) => of(new LoadProductsError(err)))
    ))
  ));

  constructor(private actions$: Actions, private productsSvc: ProductsService){}

}
