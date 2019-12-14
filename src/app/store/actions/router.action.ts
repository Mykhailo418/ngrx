import { Action } from '@ngrx/store';
import { NavigationExtras } from '@angular/router';

// Constants
export const GO = '[Router] GO';
export const BACK = '[Router] BACK';
export const FORWARD = '[Router] FORWARD';

// Actions
export class GoAction implements Action {
  readonly type = GO;
  constructor(public payload: {
    path: any[],
    query?: object,
    extras?: NavigationExtras
  }) {}
}

export class BackAction implements Action {
  readonly type = BACK;
}

export class ForwardAction implements Action {
  readonly type = FORWARD;
}

// Action type
export type RouterActions = GoAction | BackAction | ForwardAction
