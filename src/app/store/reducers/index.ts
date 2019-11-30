import {
  ActionReducer,
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { Params, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { RouterReducerState, routerReducer, RouterStateSerializer } from '@ngrx/router-store';
import { environment } from '../../../environments/environment';
import { storeFreeze } from 'ngrx-store-freeze';
import {productsReducer, ProductState } from './products.reducer';

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
