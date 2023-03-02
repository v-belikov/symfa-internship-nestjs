import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

// import { ImagePreview } from '@entities/images';
import { ProductEntity } from '@entities/products';

import { ApiGetProductModel } from '../models';

@Injectable()
export class ProductParentEntityService {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly _productsRepository: Repository<ProductEntity>,
  ) {}

  async getAll(): Promise<ApiGetProductModel[]> {
    return this._productsRepository.find({
      order: {
        title: 'asc',
        price: 'asc',
        currencyFormat: 'asc',
        availableSizes: 'asc',
        currencyId: 'asc',
        description: 'asc',
        installments: 'asc',
        isFreeShipping: 'asc',
        style: 'asc',
        // images: ImagePreview[];
      },
    });
  }

  async getProductById(id: string): Promise<ApiGetProductModel> {
    const product = await this._productsRepository.findOneBy({ id });

    if (!product) {
      throw new NotFoundException('Product not found');
    }

    return product;
  }

  async deleteProduct(id: string): Promise<void> {
    await this._productsRepository.delete({ id });
  }
}
