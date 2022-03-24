import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  increment,
  decrement,
  reset,
} from 'src/app/modules/counter/store/actions/counter.actions';
import { ICounterState } from './store/interfaces';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent {
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
    this.store.dispatch(reset());
  }
}
