import { ProductEntity } from '@entities/products/product.entity';
import { ProductType } from '@models/enum';

import { pathByName } from './path-by-name.constant';

export const generateProduct = (uuids: string[], title: string): ReadonlyArray<Partial<ProductEntity>> =>
  uuids.map((id: string, index: number) => ({
    id,
    order: index,
    productType: ProductType.Product,
    path: pathByName(`${title}}`),
  }));
