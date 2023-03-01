import { Column, Entity, OneToMany, TableInheritance, Unique } from 'typeorm';

import { ImagePreview } from '@entities/images';
import { ProductType } from '@models/enum';

import { BaseEntity } from '../common';

@Entity('products')
@Unique(['path'])
@TableInheritance({
  column: { type: 'enum', enum: ProductType, name: 'productType' },
})
export abstract class ProductParentEntity extends BaseEntity {
  @Column({ type: 'enum', name: 'product_type', enum: ProductType, select: false })
  productType: ProductType;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  path: string;

  order: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  title: string;

  @Column({ type: 'float', length: 255, nullable: false })
  price: number;

  @Column({ type: 'varchar', length: 3, nullable: false })
  currencyFormat: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  availableSizes: Array<string>;

  @Column({ type: 'bigint', length: 255, nullable: false })
  sku: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  currencyId: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  description: string;

  @Column({ type: 'int', length: 255, nullable: false })
  installments: number;

  @Column({ type: 'boolean', length: 255, nullable: false })
  isFreeShipping: boolean;

  @Column({ type: 'varchar', length: 255, nullable: false })
  style: string;

  @OneToMany(() => ImagePreview, (image: ImagePreview) => image.id)
  image: ImagePreview[];
}
