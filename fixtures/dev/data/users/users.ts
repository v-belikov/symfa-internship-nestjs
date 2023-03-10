import { DeepPartial } from 'typeorm';

import { Config } from '@core/config';
import { UserEntity } from '@entities/user';

export const USERS_FIXTURES: DeepPartial<UserEntity>[] = [
  {
    username: 'john',
    password: Config.get.hashKey,
    email: 'blabla@bail',
  },
  {
    username: 'maria',
    password: Config.get.hashKey,
    email: 'blabla_2_@bail',
  },
];
