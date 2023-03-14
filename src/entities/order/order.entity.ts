import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

import { BaseEntity } from '../common';
import { Product } from '../product';

@Entity('order')
export class Order extends BaseEntity {
  @Column({ length: 10, name: 'order_name' })
  orderName: string;

  @ManyToOne(() => Product, (product: Product) => product.id)
  @JoinColumn()
  product: Product;
}
