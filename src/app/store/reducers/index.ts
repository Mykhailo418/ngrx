import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { Params, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { RouterReducerState, routerReducer, RouterStateSerializer } from '@ngrx/router-store';
import { environment } from '../../../environments/environment';
import { storeFreeze } from 'ngrx-store-freeze';
import {productsReducer, ProductState, getProductsData, getProductsLoading, getProductsLoaded} from './products.reducer';
import {ProductItem} from '../../components/products/product-item/product-item.interface';

export interface RouterStateUrl {
  url: string;
  queryParams: Params;
  params: Params;
}

export interface MainState {
  products: ProductState;
  routerReducer: RouterReducerState<RouterStateUrl>;
}

export const reducers: ActionReducerMap<MainState> = {
  products: productsReducer,
  routerReducer: routerReducer
};

export const metaReducers: MetaReducer<MainState>[] = !environment.production ? [storeFreeze] : [];

// selectors
const getProducts = (state: MainState) => state.products;
export const selectProducts = createSelector(getProducts, getProductsData);
export const selectProductsArray = createSelector(selectProducts,
  (entities: {[id: number]: ProductItem}) => Object.keys(entities).map(key => entities[key]) );
export const selectProductsLoading = createSelector(getProducts, getProductsLoading);
export const selectProductsLoaded = createSelector(getProducts, getProductsLoaded);
export const getRouterState = createFeatureSelector<RouterReducerState<RouterStateUrl>>('routerReducer');

// serializer
export class CustomSerializer implements RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStateUrl{
    const {url} = routerState;
    const {queryParams} = routerState.root;
    let state: ActivatedRouteSnapshot = routerState.root;

    while(state.firstChild) {
      state = state.firstChild;
    }
    const {params} = state;

    return {url, queryParams, params};
  }
}
