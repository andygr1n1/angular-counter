import { gql } from 'apollo-angular';

export const GetUsers = gql`
  query Users {
    users(order_by: { counts: desc }) {
      counts
      id
      name
    }
  }
`;
