import { Injectable } from '@angular/core';
import { Apollo, QueryRef } from 'apollo-angular';
import { GetUsers } from '../graphql/queries/getCount.query';
import { IGetUsersResponse } from '../graphql/types';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  allUsers: QueryRef<IGetUsersResponse> | undefined;

  constructor(private apollo: Apollo) {}

  fetchAllHeroes(): void {
    this.apollo
      .watchQuery<IGetUsersResponse>({
        query: GetUsers,
      })
      ?.valueChanges.subscribe(({ data, loading }) => {
        if (!loading) {
          console.log('data:::', data);
        }
      });
  }
}
