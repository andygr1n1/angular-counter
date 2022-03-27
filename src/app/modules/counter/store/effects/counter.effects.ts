import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { CounterService } from '../../services/counter.service';
import {
  getUsersCounts,
  getUsersCountsSuccess,
} from '../actions/counter.actions';

@Injectable()
export class CounterEffects {
  constructor(
    private actions$: Actions,
    private counterService: CounterService
  ) {}

  loadUsersCounts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getUsersCounts),
      exhaustMap(() =>
        this.counterService.fetchAllUsers().pipe(
          map((users_data) => getUsersCountsSuccess(users_data)),
          catchError(() => EMPTY)
        )
      )
    )
  );
}
