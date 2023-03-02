import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Product } from '@entities/product';

@Injectable()
export class ProductsService {
  constructor(@InjectRepository(Product) private _productRepository: Repository<Product>) {}

  async getProducts(): Promise<Product[]> {
    return await this._productRepository.find({
      select: [
        'id',
        'availableSizes',
        'currencyFormat',
        'currencyId',
        'description',
        'imageCart',
        'imagePreview',
        'installments',
        'isFreeShipping',
        'price',
        'style',
        'title',
      ],
      relations: ['imagePreview', 'imageCart'],
    });
  }
}
