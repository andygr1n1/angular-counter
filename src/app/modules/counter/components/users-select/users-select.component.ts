import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { ICounterState } from '../../store/interfaces';

@Component({
  selector: 'app-users-select',
  templateUrl: './users-select.component.html',
  styleUrls: ['./users-select.component.scss'],
})
export class UsersSelectComponent implements OnInit {
  counter$: Observable<ICounterState[]>;
  selected_user: string | undefined;

  constructor(private store: Store<{ counter_key: ICounterState[] }>) {
    this.counter$ = store.select('counter_key');
    this.counter$.subscribe((first_user) => this.selected_user =  first_user[0]?.name);
  }

  selectionChange(): void {
    console.log('123213');
  }

  ngOnInit(): void {}
}
