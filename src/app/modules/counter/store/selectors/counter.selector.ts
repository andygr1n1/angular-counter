import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ICounterState, ICounterUser } from '../interfaces';

const counter$FeatureSelector =
  createFeatureSelector<ICounterState>('counter_key');

export const getUsersS = createSelector(
  counter$FeatureSelector,
  (state: ICounterState) => state.users
);

export const getSelectedUserS = createSelector(
  counter$FeatureSelector,
  (state: ICounterState) => state.selected_user?.id
);

// export const usersSelector = createFeatureSelector<(
//   (state: ICounterState) => state.users,
//   (users: Readonly<ICounterUser[]>) => {
//     console.log('urs', users);
//     return users;
//   }
// );
