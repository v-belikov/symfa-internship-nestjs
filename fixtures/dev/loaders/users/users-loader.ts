import { ProductEntity } from '@entities/products';
import { UserEntity } from '@entities/users';
import { AbstractLoader, IRelationsOptions } from '@fixtures/abstract-loader';
import { USERS_FIXTURES } from '@fixtures/dev/data/users';
import { EnvironmentType } from '@models/enum';

export class UsersLoader extends AbstractLoader<UserEntity> {
  entity: new () => UserEntity = UserEntity;

  data: Partial<ProductEntity>[] = USERS_FIXTURES;

  environments: EnvironmentType[] = [EnvironmentType.Development];

  relations: IRelationsOptions[] = [];
}
