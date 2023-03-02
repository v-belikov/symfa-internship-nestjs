import { ChildEntity } from 'typeorm';

import { ProductEntity } from '@entities/products/product.entity';

@ChildEntity()
export class ProductCart extends ProductEntity {}
