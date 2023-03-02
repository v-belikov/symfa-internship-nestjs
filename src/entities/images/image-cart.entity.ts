import { ChildEntity, JoinColumn, ManyToOne } from 'typeorm';

import { Product } from '@entities/product';
import { ImageType } from '@models/enum';

import { ImageParentEntity } from './image.entity';

@ChildEntity(ImageType.Cart)
export class ImageCart extends ImageParentEntity {
  @ManyToOne(() => Product, (product: Product) => product.imagePreview)
  @JoinColumn()
  product: number;
}
