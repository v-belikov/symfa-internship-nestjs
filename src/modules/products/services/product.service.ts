import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ProductParentEntity } from '@entities/products/product.entity';

import { ApiGetProductModel, UploadProductDto } from '../models';

@Injectable()
export class ProductParentEntityService {
  constructor(
    @InjectRepository(ProductParentEntity)
    private readonly _productsRepository: Repository<ProductParentEntity>,
  ) {}

  async getAll(): Promise<ApiGetProductModel[]> {
    return this._productsRepository.find({
      order: {
        path: 'asc',
        order: 'asc',
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

  async uploadProduct({ path, order }: UploadProductDto): Promise<string> {
    const product = this._productsRepository.create({
      order,
      path,
    });

    const uploadedProduct = await this._productsRepository.save(product);

    return uploadedProduct.id;
  }

  async changeOrder(id: string, order: number): Promise<void> {
    await this._productsRepository.update({ id }, { order });
  }

  async deleteProduct(id: string): Promise<void> {
    await this._productsRepository.delete({ id });
  }
}
