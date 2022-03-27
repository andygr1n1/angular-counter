import { Injectable } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client/core';
import { Apollo, QueryRef } from 'apollo-angular';
import { Observable } from 'rxjs';
import { CounterModule } from '../counter.module';
import { GetUsers } from '../graphql/queries/getCount.query';
import { IGetUsersResponse } from '../graphql/types';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  allUsers: QueryRef<IGetUsersResponse> | undefined;

  constructor(private apollo: Apollo) {}

  // fetchAllUsers(): void {
  //   this.apollo
  //     .watchQuery<IGetUsersResponse>({
  //       query: GetUsers,
  //     })
  //     ?.valueChanges.subscribe(({ data, loading }) => {
  //       if (!loading) {
  //         console.log('data:::', data);
  //       }
  //     });
  // }
  fetchAllUsers(): Observable<ApolloQueryResult<IGetUsersResponse>> {
    return this.apollo.watchQuery<IGetUsersResponse>({
      query: GetUsers,
    })?.valueChanges;
  }
}
