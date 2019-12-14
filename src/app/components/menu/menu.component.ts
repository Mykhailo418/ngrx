import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { MainState } from '../../store/reducers'
import { GoAction, BackAction, ForwardAction } from '../../store/actions/router.action';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent {
  constructor(private store: Store<MainState>) {}

  back(event: MouseEvent) {
    event.preventDefault();
    this.store.dispatch(new BackAction());
  }

  forward(event: MouseEvent) {
    event.preventDefault();
    this.store.dispatch(new ForwardAction());
  }

  home(event: MouseEvent) {
    event.preventDefault();
    this.store.dispatch(new GoAction({
      path: ['/']
    }));
  }
}
