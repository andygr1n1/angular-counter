export interface ICounterState {
  selected_user?: ICounterUser;
  users: ICounterUser[];
}

export interface ICounterUser {
  id?: string;
  counts?: number;
  name?: string;
}

export interface IUsersResponse {
  counts: number;
}
