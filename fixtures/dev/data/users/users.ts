import { DeepPartial } from 'typeorm';

import { UserEntity } from '@entities/user';

export const USERS_FIXTURES: DeepPartial<UserEntity>[] = [
  {
    username: 'john',
    password: 'changeme',
    email: 'blabla@bail',
  },
  {
    username: 'maria',
    password: 'guess',
    email: 'blabla_2_@bail',
  },
];
