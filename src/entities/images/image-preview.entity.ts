import { ChildEntity, Column, ManyToOne } from 'typeorm';

import { ProductEntity } from '@entities/products';
import { ImageType } from '@models/enum';

import { ImageParentEntity } from './image.entity';

@ChildEntity(ImageType.Preview)
export class ImagePreview extends ImageParentEntity {
  @Column({ type: 'tinyint', nullable: true, default: null })
  order: number;

  @ManyToOne(() => ProductEntity, (product: ProductEntity) => product.imagesPreview)
  product: ProductEntity;
}
