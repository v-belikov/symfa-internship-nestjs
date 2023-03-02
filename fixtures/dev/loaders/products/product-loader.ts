import { DeepPartial } from 'typeorm';

import { Product } from '@entities/product';
import { EnvironmentType } from '@models/enum';

// eslint-disable-next-line no-restricted-imports
import { AbstractLoader, IRelationsOptions } from '../../../abstract-loader';
import { PRODUCT_FIXTURES } from '../../data/products';

export class ProductLoader extends AbstractLoader<Product> {
  entity: new () => Product = Product;

  data: DeepPartial<Product>[] = PRODUCT_FIXTURES;

  environments: EnvironmentType[] = [EnvironmentType.Development];

  relations: IRelationsOptions[] = [];
}
