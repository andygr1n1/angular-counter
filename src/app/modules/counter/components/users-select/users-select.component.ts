import { Component, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { selectUser } from '../../store/actions/counter.actions';
import { ICounterState } from '../../store/interfaces';
import {
  getSelectedUserS,
  getUsersS,
} from '../../store/selectors/counter.selector';

@Component({
  selector: 'app-users-select',
  templateUrl: './users-select.component.html',
  styleUrls: ['./users-select.component.scss'],
})
export class UsersSelectComponent implements OnInit {
  selectedUserSubscription: Subscription | undefined;
  selected_user: string = '';
  users$ = this.store.pipe(select(getUsersS));

  constructor(public store: Store<{ counter_key: ICounterState }>) {}

  selectionChange(value: MatSelectChange): void {
    const user_id: string = value.value;
    this.store.dispatch(selectUser(user_id));
  }

  ngOnInit(): void {
    this.selectedUserSubscription = this.store
      .pipe(select(getSelectedUserS))
      .subscribe((user) => (this.selected_user = user?.id ?? ''));
  }

  ngOnDestroy(): void {
    this.selectedUserSubscription?.unsubscribe();
  }
}
