import { Column, Entity, OneToMany } from 'typeorm';

import { ImagePreview } from '@entities/images';

import { BaseEntity } from '../common';

@Entity('products')
export class ProductEntity extends BaseEntity {
  @Column({ type: 'varchar', length: 255, nullable: false })
  title: string;

  @Column({ type: 'float', nullable: false })
  price: number;

  @Column({ type: 'varchar', length: 3, nullable: false })
  currencyFormat: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  availableSizes: Array<string>;

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
  images: ImagePreview[];
}
