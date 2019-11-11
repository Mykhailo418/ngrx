import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { storeFreeze } from 'ngrx-store-freeze';
import {productsReducer, ProductState, getProductsData, getProductsLoading, getProductsLoaded} from './products.reducer';
import {ProductItem} from '../../components/products/product-item/product-item.interface';

export interface MainState {
  products: ProductState
}

export const reducers: ActionReducerMap<MainState> = {
  products: productsReducer
};

export const metaReducers: MetaReducer<MainState>[] = !environment.production ? [storeFreeze] : [];

// selectors
const getProducts = (state: MainState) => state.products;
export const selectProducts = createSelector(getProducts, getProductsData);
export const selectProductsArray = createSelector(selectProducts,
  (entities: {[id: number]: ProductItem}) => Object.keys(entities).map(key => entities[key]) );
export const selectProductsLoading = createSelector(getProducts, getProductsLoading);
export const selectProductsLoaded = createSelector(getProducts, getProductsLoaded);
