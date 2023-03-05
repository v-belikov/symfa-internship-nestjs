import { Column, Entity, OneToMany } from 'typeorm';

import { ImagePreview } from '@entities/images';
import { Size } from '@models/enum';

import { BaseEntity } from '../common';
import { ImageCart } from '../images/image-cart.entity';

@Entity('products')
export class ProductEntity extends BaseEntity {
  @Column({ type: 'varchar', length: 255, nullable: false })
  title: string;

  @Column({ type: 'float', nullable: false })
  price: number;

  @Column({ type: 'varchar', length: 3, nullable: false })
  currencyFormat: string;

  @Column({ type: 'json', nullable: false })
  availableSizes: Size[];

  @Column({ type: 'varchar', length: 255, nullable: false })
  currencyId: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  description: string;

  @Column({ type: 'int', nullable: false })
  installments: number;

  @Column({ type: 'boolean', nullable: false })
  isFreeShipping: boolean;

  @Column({ type: 'varchar', length: 255, nullable: false })
  style: string;

  @OneToMany(() => ImagePreview, (image: ImagePreview) => image.product)
  imagesPreview: ImagePreview[];

  @OneToMany(() => ImageCart, (image: ImageCart) => image.product)
  imagesCart: ImageCart;
}
