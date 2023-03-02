import { DeepPartial } from 'typeorm';

import { ProductEntity } from '@entities/products/product.entity';
import { EnvironmentType } from '@models/enum';

// eslint-disable-next-line no-restricted-imports
import { AbstractLoader, IRelationsOptions } from '../../../abstract-loader';
import { PRODUCT_FIXTURES } from '../../data/products';

export class ProductParentEntityLoader extends AbstractLoader<ProductEntity> {
  entity: new () => ProductEntity = ProductEntity;

  data: DeepPartial<ProductEntity>[] = PRODUCT_FIXTURES;

  environments: EnvironmentType[] = [EnvironmentType.Development];

  relations: IRelationsOptions[] = [];
}
