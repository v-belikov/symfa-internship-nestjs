import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';

import { ImageCart, ImagePreview } from '@entities/images';
import { Size } from '@models/enum';

import { BaseEntity } from '../common';

@Entity('products')
export class ProductEntity extends BaseEntity {
  @Column('json')
  availableSizes: Size[];

  @Column({ type: 'varchar', length: 1, nullable: false })
  currencyFormat: string;

  @Column({ type: 'varchar', nullable: false })
  currencyId: string;

  @Column({ type: 'varchar', nullable: false })
  description: string;

  @Column({ type: 'int', nullable: false })
  installments: number;

  @Column({ type: 'boolean', nullable: false })
  isFreeShipping: boolean;

  @Column({ type: 'float', nullable: false })
  price: number;

  @Column({ type: 'varchar', nullable: false })
  style: string;

  @Column({ type: 'varchar', nullable: false })
  title: string;

  @OneToMany(() => ImagePreview, (image: ImagePreview) => image.product)
  imagePreview: ImagePreview[];

  @OneToOne(() => ImageCart, (image: ImageCart) => image.product)
  @JoinColumn()
  imageCart: ImageCart;
}
