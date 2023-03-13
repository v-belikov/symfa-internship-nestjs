import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ProductEntity } from '@entities/products';
import { ProductsService } from '@modules/products/services';

import { UpdateProductDto } from '../models';

@Injectable()
export class ProductManagementService {
  constructor(
    private readonly _productsService: ProductsService,
    @InjectRepository(ProductEntity)
    private readonly _productsRepository: Repository<ProductEntity>,
  ) {}

  async deleteProduct(product: any) {
    return this._productsService.deleteProduct(product.id);
  }

  async updateProduct({ ...product }: UpdateProductDto) {
    const productForUpdating = await this._productsService.getProductById(product.id);

    productForUpdating.description = product?.description;
    productForUpdating.title = product?.title;
    productForUpdating.price = product?.price;
    productForUpdating.style = product?.style;

    await this._productsRepository.save(productForUpdating);

    return productForUpdating;
  }
}
