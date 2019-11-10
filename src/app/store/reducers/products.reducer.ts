import {ProductItem} from '../../components/products/product-item/product-item.interface';
import {ProductsActions, LOAD_PRODUCTS, LOAD_PRODUCTS_SUCCESS, LOAD_PRODUCTS_ERROR} from '../actions/products.action';

export interface ProductState {
  data: ProductItem[];
  loaded: boolean;
  loading: boolean;
}

export const initState = {
  data: [],
  loaded: false,
  loading: false
};

export function productsReducer(state = initState, action: ProductsActions) : ProductState {
  const {type, payload} = action;
  switch(type){
    case LOAD_PRODUCTS:
      return {
        ...state,
        loading: true
      }
    case LOAD_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: payload
      }
    case LOAD_PRODUCTS_ERROR:
      return {
        ...state,
        loading: false,
        loaded: false,
      }
  }
  return stste;
}
