import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';

import { Size } from '@models/enum';

import { BaseEntity } from '../common';
import { ImageCart } from '../images';
import { ImagePreview } from '../images';

@Entity('products')
export class Product extends BaseEntity {
  @Column({
    type: 'json',
    name: 'available_sizes',
  })
  availableSizes: Size[];

  @Column({ length: 1, name: 'currency_format' })
  currencyFormat: string;

  @Column({
    type: 'varchar',
    name: 'currency_id',
    length: 3,
  })
  currencyId: string;

  @Column({
    type: 'varchar',
    name: 'description',
    length: 50,
  })
  description: string;

  @Column({
    type: 'tinyint',
    name: 'installments',
  })
  installments: number;

  @Column({
    type: 'boolean',
    name: 'is_free_shipping',
  })
  isFreeShipping: boolean;

  @Column({
    type: 'smallint',
    name: 'price',
  })
  price: number;

  @OneToOne(() => ImageCart, (image: ImageCart) => image.product)
  @JoinColumn()
  imageCart: ImageCart;

  @OneToMany(() => ImagePreview, (image: ImagePreview) => image.product)
  imagePreview: ImagePreview[];

  @Column({
    type: 'varchar',
    name: 'style',
    length: 40,
  })
  style: string;

  @Column({
    type: 'varchar',
    name: 'title',
    length: 40,
  })
  title: string;
}
