import { Action, createReducer, on } from '@ngrx/store';
import {
  increment,
  decrement,
  reset,
  getUsersCountsSuccess,
  selectUser,
} from '../actions/counter.actions';
import { ICounterState, ICounterUser } from '../interfaces';

export const counterFeatureKey = 'counter_key';

export const initialState: ICounterState = {
  loading: true,
  users: [],
};

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => state),
  // on(decrement, (state) => ({
  //   count: state.count - 1,
  // })),
  // on(reset, (state) => ({ count: 0 })),
  on(getUsersCountsSuccess, (state, users_data) => {
    return {
      loading: false,
      selected_user: users_data.data.users[0],
      users: users_data.data.users,
    };
  }),
  on(selectUser, (state, props) => {
    const selected_user = state.users.find((user) => user.id === props.user_id);
    if (!selected_user) return state;

    return {
      ...state,
      selected_user,
    };
  })
);

// https://ngrx.io/guide/store/reducers

// # State changes are handled by pure functions called reducers that take the current state and the latest action to compute a new state.

// Note: The spread operator only does shallow copying and does not handle deeply nested objects.
// You need to copy each level in the object to ensure immutability.There are libraries that handle deep copying including lodash and immer.

// Reducers are only responsible for deciding which state transitions need to occur for a given action.

// # In an application there is also a need to handle impure actions, e.g. AJAX requests, in NgRx we call them Effects. :::EFFECTS:::
