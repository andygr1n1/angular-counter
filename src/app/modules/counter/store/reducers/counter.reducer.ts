import { Action, createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from '../actions/counter.actions';
import { ICounterState } from '../interfaces';

export const counterFeatureKey = 'counter_key';

export const initialState: ICounterState = { count: 0 };

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => ({
    count: state.count + 1,
  })),
  on(decrement, (state) => ({
    count: state.count - 1,
  })),
  on(reset, (state) => ({ count: 0 }))
);

// https://ngrx.io/guide/store/reducers

// # State changes are handled by pure functions called reducers that take the current state and the latest action to compute a new state.

// Note: The spread operator only does shallow copying and does not handle deeply nested objects.
// You need to copy each level in the object to ensure immutability.There are libraries that handle deep copying including lodash and immer.

// Reducers are only responsible for deciding which state transitions need to occur for a given action.

// # In an application there is also a need to handle impure actions, e.g. AJAX requests, in NgRx we call them Effects. :::EFFECTS:::
