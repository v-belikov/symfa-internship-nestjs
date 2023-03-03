import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ProductEntity } from '@entities/products';

@Injectable()
export class ProductsService {
  constructor(@InjectRepository(ProductEntity) private _productRepository: Repository<ProductEntity>) {}

  async getAllProducts(filterParams: string[]): Promise<ProductEntity[]> {
    const queryBuilder = this._productRepository
      .createQueryBuilder('product')
      .select([
        'product.id',
        'product.availableSizes',
        'product.currencyFormat',
        'product.currencyId',
        'product.description',
        'imageCart',
        'imagePreview',
        'product.installments',
        'product.isFreeShipping',
        'product.price',
        'product.style',
        'product.title',
      ])
      .innerJoin('product.imagePreview', 'imagePreview')
      .innerJoin('product.imageCart', 'imageCart');

    filterParams?.forEach((size: string, index: number) => {
      const key = `size${index}`;

      queryBuilder.orWhere(`JSON_SEARCH(product.availableSizes, 'one', :${key}, '$')`, { [key]: size });
    });

    return queryBuilder.getMany();
  }

  getProductById(id: string): Promise<ProductEntity> {
    const product = this._productRepository.findOneBy({ id });

    if (!product) {
      throw new NotFoundException('Product not found');
    }

    return product;
  }

  async deleteProduct(id: string): Promise<void> {
    await this._productRepository.delete({ id });
  }
}
