import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  debounceTime,
  fromEvent,
  interval,
  mergeMap,
  Observable,
  of,
  switchMap,
} from 'rxjs';
import {
  increment,
  decrement,
  reset,
  apply,
  getUsersCounts,
} from 'src/app/modules/counter/store/actions/counter.actions';
import { CounterService } from './services/counter.service';
import { CounterEffects } from './store/effects/counter.effects';
import { ICounterState, IUsersResponse } from './store/interfaces';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit {
  counter$: Observable<ICounterState>;

  constructor(private store: Store<{ counter_key: ICounterState }>) {
    this.counter$ = store.select('counter_key');
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    // this.store.dispatch(reset());
  }

  new_user() {}

  apply() {
    this.store.dispatch(apply());
  }

  ngOnInit(): void {
    this.store.dispatch(getUsersCounts());
  }

  ngAfterViewChecked(): void {
    const clicker = fromEvent(document.getElementById('reset-btn')!, 'click');
    const clickerInterval = interval(500);

    clicker
      .pipe(
        debounceTime(1000),
        switchMap((event) => clickerInterval)
      )
      .subscribe((value) => console.log(value));
  }
}
