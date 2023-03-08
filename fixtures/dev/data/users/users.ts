import { Config } from '@core/config';
import { UserEntity } from '@entities/users';
import { RolesEnum } from '@shared/user/roles.enum';

export const USERS_FIXTURES: Partial<UserEntity>[] = [
  {
    username: 'Dima',
    email: '1@mailru',
    password: Config.get.defaultPassword,
    role: RolesEnum.Admin,
  },
  {
    username: 'Dima1',
    email: '2@mailru',
    password: Config.get.defaultPassword,
    role: RolesEnum.User,
  },
];
