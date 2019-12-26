import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Actions } from '@ngrx/effects';
import { hot, cold } from 'jasmine-marbles';
import { Observable, of, empty } from 'rxjs';

import { ProductsService } from '../../services/products.service';
import { LoadProductsSuccess, LoadProducts } from '../actions/products.action';
import { ProductsEffects } from './products.effects';
import { ProductItem } from '../../components/products/product-item/product-item.interface';

export class TestActions extends Actions {
  source: Observable<any>;

  constructor() {
    super(empty());
  }

  set stream(source: Observable<any>) {
    this.source = source;
  }
}

export function getActions() {
  return new TestActions();
}

describe('ProductsEffects', () => {
  let actions$: TestActions;
  let service: ProductsService;
  let effects: ProductsEffects;

  const products: ProductItem[] = [
    {
      id: 123,
      name: 'test',
      body: 'test',
      email: 'test@mail.com',
    }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        ProductsService,
        ProductsEffects,
        {provide: Actions, useFactory: getActions}
      ]
    });

    actions$ = TestBed.get(Actions);
    service = TestBed.get(ProductsService);
    effects = TestBed.get(ProductsEffects);

    spyOn(service, 'getProducts').and.returnValue(of(products));
  });

  describe('loadProducts$', () => {
    it('should return a collaction from LoadProductsSuccess', () => {
      const action = new LoadProducts();
      const completion = new LoadProductsSuccess(products);

      actions$.stream = hot('-a', {a: action});
      const expected = cold('-b', {b: completion});

      expect(effects.loadProducts$).toBeObservable(expected);
    });
  })
});
