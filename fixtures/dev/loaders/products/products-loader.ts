import { ProductEntity } from '@entities/products';
import { PRODUCT_FIXTURES } from '@fixtures/dev/data/products';
import { EnvironmentType } from '@models/enum';

// eslint-disable-next-line no-restricted-imports
import { AbstractLoader, IRelationsOptions } from '../../../abstract-loader';

export class ProductLoader extends AbstractLoader<ProductEntity> {
  entity: new () => ProductEntity = ProductEntity;

  data: Partial<ProductEntity>[] = PRODUCT_FIXTURES;

  environments: EnvironmentType[] = [EnvironmentType.Development];

  relations: IRelationsOptions[] = [];
}
