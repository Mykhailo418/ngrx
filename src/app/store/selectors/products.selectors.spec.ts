import { TestBed } from '@angular/core/testing';
import { StoreModule, Store, combineReducers } from '@ngrx/store';

import * as fromSelectors from './products.selectors';
import { reducers, MainState } from '../reducers';
import { LoadProductsSuccess, LoadProducts } from '../actions/products.action';
import { ProductItem } from '../../components/products/product-item/product-item.interface';

let store: Store<MainState>;
let mockProducts = [
  {
    id: 123,
    name: 'name 1',
    body: 'body 1',
    email: 'name1@mail.com'
  },
  {
    id: 124,
    name: 'name 2',
    body: 'body 2',
    email: 'name2@mail.com'
  }
];

describe('Products Selector', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot(reducers) ]
    });

    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();
  });

  describe('selectProducts', () => {
    it('should return products from store', () => {
      let result;
      store.select(fromSelectors.selectProducts)
        .subscribe(value => result = value);
      expect(result).toEqual({});
      store.dispatch(new LoadProductsSuccess(mockProducts));
      expect(result).toEqual(arrayToObject(mockProducts));
    });
  });

  describe('selectProductsArray', () => {
    it('should return products in array format from store', () => {
      let result;
      store.select(fromSelectors.selectProductsArray)
        .subscribe(value => result = value);
      store.dispatch(new LoadProductsSuccess(mockProducts));
      expect(result).toEqual(mockProducts);
    });
  });

  describe('selectProductsLoading', () => {
    it('should return loadng value from store', () => {
      let result;
      store.select(fromSelectors.selectProductsLoading)
        .subscribe(value => result = value);
      expect(result).toBe(false);
      store.dispatch(new LoadProducts());
      expect(result).toBe(true);
    });
  });

  describe('selectProductsLoaded', () => {
    it('should return loaded value from store', () => {
      let result;
      store.select(fromSelectors.selectProductsLoaded)
        .subscribe(value => result = value);
      expect(result).toBe(false);
      store.dispatch(new LoadProductsSuccess(mockProducts));
      expect(result).toBe(true);
    });
  });
});

function arrayToObject(arr: any[]) {
  return arr.reduce((acc: any, item: any) => {
    acc[item.id] = item;
    return acc;
  }, {})
}
