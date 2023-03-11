import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Order } from '@entities/order/order.entity';

@Injectable()
export class OrderService {
  constructor(@InjectRepository(Order) private _orderRepository: Repository<Order>) {}

  async getProducts(): Promise<Order[]> {
    const queryBuilder = this._orderRepository
      .createQueryBuilder('order')
      .select(['order.order_name', 'order.product'])
      .innerJoin('order.product', 'Product');

    return queryBuilder.getMany();
  }
}
