import { RolesEnum } from '@shared/user/roles.enum';

export interface IUser {
  username: string;
  email: string;
  password: string;
  roles: RolesEnum[];
}
