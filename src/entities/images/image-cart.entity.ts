import { ChildEntity, ManyToOne } from 'typeorm';

import { ProductParentEntity } from '@entities/products/product.entity';
import { ImageType } from '@models/enum';

import { ImageParentEntity } from './image.entity';

@ChildEntity(ImageType.Cart)
export class ImageCart extends ImageParentEntity {
  @ManyToOne(() => ProductParentEntity, (product: ProductParentEntity) => product.id)
  product: ProductParentEntity;
}
