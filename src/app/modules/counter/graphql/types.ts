export interface IGetUsersResponse {
  users: [
    {
      id?: string;
      counts?: number;
      name?: string;
    }
  ];
}
