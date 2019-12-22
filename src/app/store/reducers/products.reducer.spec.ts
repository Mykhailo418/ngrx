import { productsReducer, initState } from './products.reducer';
import { ProductItem } from '../../components/products/product-item/product-item.interface';
import { LoadProducts, LoadProductsSuccess, LoadProductsError } from '../actions/products.action';

describe('Products Reducer', () => {
  describe('undefined Action', () => {
    it('should return default state', () => {
      const action = {} as any;
      const state = productsReducer(undefined, action);
      expect(state).toBe(initState);
    });
  });

  describe('LOAD_PRODUCTS Action', () => {
    it('should set loading to true', () => {
      const action = new LoadProducts();
      const state = productsReducer(initState, action);
      expect(state.data).toEqual({});
      expect(state.loading).toEqual(true);
      expect(state.loaded).toEqual(false);
    });
  });

  describe('LOAD_PRODUCTS_SUCCESS Action', () => {
    it('should set products', () => {
      const products: ProductItem[] = [
        {
          id: 123,
          name: 'test',
          body: 'test',
          email: 'test@mail.com',
        }
      ];
      const data = {
        [products[0].id]: products[0]
      }
      const action = new LoadProductsSuccess(products);
      const state = productsReducer(initState, action);
      expect(state.data).toEqual(data);
      expect(state.loading).toEqual(false);
      expect(state.loaded).toEqual(true);
    });
  });

  describe('LOAD_PRODUCTS_ERROR Action', () => {
    it('should set loading and loaded to false', () => {
      const action = new LoadProductsError('error');
      const state = productsReducer(initState, action);
      expect(state.data).toEqual({});
      expect(state.loading).toEqual(false);
      expect(state.loaded).toEqual(false);
    });
  });
});
