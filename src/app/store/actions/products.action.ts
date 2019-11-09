import {Action} from '@ngrx/store';
import {ProductItem} from '../../components/products/product-item/product-item.interface';

// Constants
export const LOAD_PRODUCTS = '[Products] Load Products';
export const LOAD_PRODUCTS_SUCCESS = '[Products] Load Products Success';
export const LOAD_PRODUCTS_ERROR = '[Products] Load Products Error';

// actions
export class LoadProducts implements Action {
  readonly type = LOAD_PRODUCTS;
}
export class LoadProductsSuccess implements Action {
  readonly type = LOAD_PRODUCTS_SUCCESS;
  constructor(public payload: ProductItem[]){}
}
export class LoadProductsError implements Action {
  readonly type = LOAD_PRODUCTS_ERROR;
  constructor(public payload: any){}
}

// action type
export type ProductsActions = LoadProducts | LoadProductsSuccess | LoadProductsError;
