import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ProductEntity } from '@entities/products';

import { ApiGetProductModel } from '../models';

@Injectable()
export class ProductsService {
  constructor(@InjectRepository(ProductEntity) private _productRepository: Repository<ProductEntity>) {}

  async getAllProducts(): Promise<ProductEntity[]> {
    return await this._productRepository.find({
      order: {
        availableSizes: 'asc',
        currencyFormat: 'asc',
        currencyId: 'asc',
        description: 'asc',
        installments: 'asc',
        isFreeShipping: 'asc',
        price: 'asc',
        style: 'asc',
        title: 'asc',
        id: 'asc',
      },
      relations: ['imageCart', 'imagesPreview'],
    });
  }

  async getProductById(id: string): Promise<ApiGetProductModel> {
    const product = await this._productRepository.findOneBy({ id });

    if (!product) {
      throw new NotFoundException('Product not found');
    }

    return product;
  }

  async deleteProduct(id: string): Promise<void> {
    await this._productRepository.delete({ id });
  }
}
