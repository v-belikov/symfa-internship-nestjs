import { DeepPartial } from 'typeorm';

import { UserEntity } from '@entities/user';
import { USERS_FIXTURES } from '@fixtures/dev/data/users';
import { EnvironmentType } from '@models/enum';

// eslint-disable-next-line no-restricted-imports
import { AbstractLoader, IRelationsOptions } from '../../../abstract-loader';

export class UserParentEntityLoader extends AbstractLoader<UserEntity> {
  entity: new () => UserEntity = UserEntity;

  data: DeepPartial<UserEntity>[] = USERS_FIXTURES;

  environments: EnvironmentType[] = [EnvironmentType.Development];

  relations: IRelationsOptions[] = [];
}
