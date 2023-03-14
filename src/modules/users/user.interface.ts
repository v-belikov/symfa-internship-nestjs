import { UserType } from './user.type';

export interface IUserRequest {
  username: string;
  password: string;
  id: string;
  email: string;
}

export interface IUserResponse {
  user: UserType & { token: string };
}
