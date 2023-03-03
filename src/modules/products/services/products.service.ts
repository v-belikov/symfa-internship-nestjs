import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Product } from '@entities/product';

@Injectable()
export class ProductsService {
  constructor(@InjectRepository(Product) private _productRepository: Repository<Product>) {}

  async getProducts(filterParams: string[]): Promise<Product[]> {
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

    // console.log(result)

    return queryBuilder.getMany();
  }
}
