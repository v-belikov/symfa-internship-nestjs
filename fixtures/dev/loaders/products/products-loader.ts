import { ProductCart } from '@entities/products/product-cart.entity';
import { PRODUCT_FIXTURES } from '@fixtures/dev/data/products';
import { EnvironmentType } from '@models/enum';

// eslint-disable-next-line no-restricted-imports
import { AbstractLoader, IRelationsOptions } from '../../../abstract-loader';

export class ProductLoader extends AbstractLoader<ProductCart> {
  entity: new () => ProductCart = ProductCart;

  data: Partial<ProductCart>[] = PRODUCT_FIXTURES;

  environments: EnvironmentType[] = [EnvironmentType.Development];

  relations: IRelationsOptions[] = [];
}
