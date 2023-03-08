import { UserEntity } from '@entities/users';
import { PASSWORD } from '@fixtures/dev/data/users/password.constant';
import { RolesEnum } from '@shared/user/roles.enum';

export const USERS_FIXTURES: Partial<UserEntity>[] = [
  {
    username: 'Dima',
    email: '1@mailru',
    password: PASSWORD,
    role: RolesEnum.Admin,
  },
  {
    username: 'Dima1',
    email: '2@mailru',
    password: PASSWORD,
    role: RolesEnum.User,
  },
];
