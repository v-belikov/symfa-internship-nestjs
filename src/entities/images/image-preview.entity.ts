import { ChildEntity, Column, ManyToOne } from 'typeorm';

import { ProductParentEntity } from '@entities/products/product.entity';
import { ImageType } from '@models/enum';

import { ImageParentEntity } from './image.entity';

@ChildEntity(ImageType.Preview)
export class ImagePreview extends ImageParentEntity {
  // TODO add unique for relation with goods
  @Column({ type: 'tinyint', nullable: true, default: null })
  order: number;

  @ManyToOne(() => ProductParentEntity, (product: ProductParentEntity) => product.id)
  product: ProductParentEntity;
}
