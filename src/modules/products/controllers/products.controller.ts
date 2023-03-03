import { Controller, Delete, Get, HttpStatus, Param, ParseUUIDPipe, Query } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { ProductEntity } from '@entities/products';
import { ApiGetImagePreviewModel } from '@modules/images/models';
import { ApiGetProductModel } from '@modules/products/models';
import { GetProductsQueryDto } from '@modules/products/models/GetProductsQueryDto';

import { ProductsService } from '../services';

@Controller('products')
@ApiTags('products')
export class ProductsController {
  constructor(private readonly _productService: ProductsService) {}

  @Get()
  @ApiResponse({
    type: ApiGetProductModel,
    status: HttpStatus.OK,
    isArray: true,
  })
  getAllProducts(@Query() filterSizes: GetProductsQueryDto) {
    return this._productService.getAllProducts(filterSizes.sizes);
  }

  @Get(':id')
  @ApiResponse({
    type: ApiGetImagePreviewModel,
    status: HttpStatus.OK,
  })
  getProductById(@Param('id', ParseUUIDPipe) id: string): Promise<ProductEntity> {
    return this._productService.getProductById(id);
  }

  @Delete(':id')
  @ApiResponse({ status: HttpStatus.OK })
  deleteProduct(@Param('id', ParseUUIDPipe) id: string) {
    return this._productService.deleteProduct(id);
  }
}
