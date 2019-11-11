import {ProductItem} from '../../components/products/product-item/product-item.interface';
import {ProductsActions, LOAD_PRODUCTS, LOAD_PRODUCTS_SUCCESS, LOAD_PRODUCTS_ERROR} from '../actions/products.action';

export interface ProductState {
  data: {[id: number]: ProductItem};
  loaded: boolean;
  loading: boolean;
}

export const initState = {
  data: {},
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
      const entities = payload.reduce((entities, product) => {
        entities[product.id] = product;
        return entities;
      }, {});
      return {
        ...state,
        loading: false,
        loaded: true,
        data: entities
      }
    case LOAD_PRODUCTS_ERROR:
      return {
        ...state,
        loading: false,
        loaded: false,
      }
  }
  return state;
}

// selectors
export const getProductsData = (state: ProductState) => state.data;
export const getProductsLoading = (state: ProductState) => state.loading;
export const getProductsLoaded = (state: ProductState) => state.loaded;
