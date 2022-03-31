import { ApolloQueryResult } from '@apollo/client/core';
import { createAction, props } from '@ngrx/store';
import { IGetUsersResponse } from '../../graphql/types';
import { ICounterUser, IUsersResponse } from '../interfaces';

export const increment = createAction('[Counter Component]  increment');

export const decrement = createAction('[Counter Component]  decrement');

export const reset = createAction('[Counter Component]  reset');

export const apply = createAction('[Counter Component]  apply counts');

export const getUsersCounts = createAction('[User Counts]  Get User Counts');

export const getUsersCountsSuccess = createAction(
  '[User Counts]  Get User Counts Success',
  (users: ApolloQueryResult<IGetUsersResponse>) => {
    return users;
  }
  // props<{users: ApolloQueryResult<IGetUsersResponse> }>()
);

export const selectUser = createAction(
  '[User Select] Change Selected User',
  (user_id: string) => {
    return { user_id };
  }
);

// # https://ngrx.io/guide/store/actions --
// Actions describe unique events that are dispatched from components and services.
// Action's only responsibilities are to express unique events and intents.

// actions are inexpensive to write, so the more actions you write, the better you express flows in your application.
// capture events not commands as you are separating the description of an event and the handling of that event.

// The category of the action is captured within the square brackets [].
// The category is used to group actions for a particular area, whether it be a component page, backend API, or browser API.
// The Login text after the category is a description about what event occurred from this action. In this case, the user clicked a login button from the login page to attempt to authenticate with a username and password.
