import { ChildEntity, JoinColumn, ManyToOne } from 'typeorm';

import { ProductEntity } from '@entities/products';
import { ImageType } from '@models/enum';

import { ImageParentEntity } from './image.entity';

@ChildEntity(ImageType.Cart)
export class ImageCart extends ImageParentEntity {
  @ManyToOne(() => ProductEntity, (product: ProductEntity) => product.imageCart)
  product: number;
}
