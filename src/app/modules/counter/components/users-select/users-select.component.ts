import { Component, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import { selectUser } from '../../store/actions/counter.actions';
import { ICounterState, ICounterUser } from '../../store/interfaces';

@Component({
  selector: 'app-users-select',
  templateUrl: './users-select.component.html',
  styleUrls: ['./users-select.component.scss'],
})
export class UsersSelectComponent implements OnInit {
  counter$: Observable<ICounterState>;
  users_subscription$: Subscription;
  // selected_user_subscription$: Subscription;
  selected_user: string = '';
  users: ICounterUser[] = [];
  name: string = 'Andrew';

  constructor(public store: Store<{ counter_key: ICounterState }>) {
    this.counter$ = store.select('counter_key');
    this.users_subscription$ = this.counter$.subscribe((store) => {
      this.users = store.users;
    });
  }

  selectionChange(value: MatSelectChange): void {
    const user_id: string = value.value;
    this.selected_user = user_id;
    this.store.dispatch(selectUser(user_id));
  }

  ngOnInit(): void {
    this.counter$.subscribe((store) => {
      this.selected_user = store.users[0]?.id ?? '';
    });
  }
  ngOnDestroy(): void {
    this.users_subscription$.unsubscribe();
    // this.selected_user_subscription$?.unsubscribe();
  }
}
