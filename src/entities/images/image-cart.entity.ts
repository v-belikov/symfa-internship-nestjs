import { ChildEntity, JoinColumn, ManyToOne } from 'typeorm';

import { ImageType } from '@models/enum';

import { Product } from '../product';
import { ImageParentEntity } from './image.entity';

@ChildEntity(ImageType.Cart)
export class ImageCart extends ImageParentEntity {
  @ManyToOne(() => Product, (product: Product) => product.imageCart)
  @JoinColumn()
  product: Product;
}
