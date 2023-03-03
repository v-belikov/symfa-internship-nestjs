import { ChildEntity, Column, ManyToOne } from 'typeorm';

import { Product } from '@entities/product/product.entity';
import { ImageType } from '@models/enum';

import { ImageParentEntity } from './image.entity';

@ChildEntity(ImageType.Preview)
export class ImagePreview extends ImageParentEntity {
  // TODO add unique for relation with goods

  @ManyToOne(() => Product, (product: Product) => product.imagePreview)
  product: Product;

  @Column({ type: 'tinyint', nullable: true, default: null })
  order: number;
}
