import { Column, Entity, OneToMany, PrimaryGeneratedColumn, TableInheritance } from 'typeorm';

import { ImageParentEntity } from '@entities/images/image.entity';

import { BaseEntity } from '../common';

@Entity('products')
export class ProductEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column('json')
  availableSizes: string[];

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

  @OneToMany(() => ImageParentEntity, (image: ImageParentEntity) => image.product)
  images: ImageParentEntity[];
}
