import {
  LOAD_PRODUCTS, LOAD_PRODUCTS_SUCCESS, LOAD_PRODUCTS_ERROR,
  LoadProducts, LoadProductsSuccess, LoadProductsError
} from './products.action';

const mockPayload = [{
  id: 123,
  name: 'test',
  body: 'test',
  email: 'test@mail.com',
}];

describe('Products Actions', () => {

  it('should create LOAD_PRODUCTS action', () => {
    const action = new LoadProducts(mockPayload);
    expect({...action}).toEqual({
      type: LOAD_PRODUCTS,
      payload: mockPayload
    });
  });

  it('should create LOAD_PRODUCTS action', () => {
    const action = new LoadProductsSuccess(mockPayload);
    expect({...action}).toEqual({
      type: LOAD_PRODUCTS_SUCCESS,
      payload: mockPayload
    });
  });

  it('should create LOAD_PRODUCTS action', () => {
    const error = 'error';
    const action = new LoadProductsError(error);
    expect({...action}).toEqual({
      type: LOAD_PRODUCTS_ERROR,
      payload: error
    });
  });

});
