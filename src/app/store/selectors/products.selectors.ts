import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RouterReducerState } from '@ngrx/router-store';

import { MainState, RouterStateUrl } from '../reducers';
import { getProductsData, getProductsLoading, getProductsLoaded } from '../reducers/products.reducer';
import { ProductItem } from '../../components/products/product-item/product-item.interface';

const getProducts = (state: MainState) => state.products;

export const selectProducts = createSelector(getProducts, getProductsData);
export const selectProductsArray = createSelector(selectProducts,
  (entities: {[id: number]: ProductItem}) => Object.keys(entities).map(key => entities[key]) );
export const selectProductsLoading = createSelector(getProducts, getProductsLoading);
export const selectProductsLoaded = createSelector(getProducts, getProductsLoaded);
export const getRouterState = createFeatureSelector<RouterReducerState<RouterStateUrl>>('routerReducer');
