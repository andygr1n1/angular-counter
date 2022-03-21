import { Action, createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from '../actions/counter.actions';
import { ICounterState } from '../interfaces';

export const initialState: ICounterState | undefined = { count: 0 };

const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => ({
    count: state.count + 1,
  })),
  on(decrement, (state) => ({
    count: state.count - 1,
  })),
  on(reset, (state) => ({ count: 0 }))
);

export function counterReducer(state: ICounterState | undefined, action: Action) {
  return _counterReducer(state, action);
}
