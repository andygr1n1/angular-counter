import { Apollo, gql } from 'apollo-angular';
import { IGetUsersResponse } from '../types';

export const GetUsers = gql`
  query Users {
    users(order_by: { counts: desc }) {
      counts
      id
      name
    }
  }
`;