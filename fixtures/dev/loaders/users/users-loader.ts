import { DeepPartial } from 'typeorm';

import { UserEntity } from '@entities/user';
import { AbstractLoader, IRelationsOptions } from '@fixtures/abstract-loader';
import { USERS_FIXTURES } from '@fixtures/dev/data/users';
import { EnvironmentType } from '@models/enum';

export class UserParentEntityLoader extends AbstractLoader<UserEntity> {
  entity: new () => UserEntity = UserEntity;

  data: DeepPartial<UserEntity>[] = USERS_FIXTURES;

  environments: EnvironmentType[] = [EnvironmentType.Development];

  relations: IRelationsOptions[] = [];
}
