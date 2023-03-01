// import { ProductParentEntity } from '@entities/images';
import { ProductParentEntity } from '@entities/products/product.entity';
import { EnvironmentType } from '@models/enum';

// eslint-disable-next-line no-restricted-imports
import { AbstractLoader, IRelationsOptions } from '../../../abstract-loader';
import { PRODUCT_FIXTURES } from '../../data/products';

export class ProductParentEntityLoader extends AbstractLoader<ProductParentEntity> {
  entity: new () => ProductParentEntity = ProductParentEntity;

  data: Partial<ProductParentEntity>[] = PRODUCT_FIXTURES;

  environments: EnvironmentType[] = [EnvironmentType.Development];

  relations: IRelationsOptions[] = [];
}
