import { Controller, Delete, Get, HttpStatus, Param, ParseUUIDPipe } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { ApiGetImagePreviewModel } from '@modules/images/models';
import { ApiGetProductModel } from '@modules/products/models';

import { ProductsService } from '../services';

@Controller('products')
@ApiTags('products')
export class ProductsController {
  constructor(private readonly _ProductService: ProductsService) {}

  @Get()
  @ApiResponse({
    type: ApiGetProductModel,
    status: HttpStatus.OK,
    isArray: true,
  })
  getAllProducts() {
    return this._ProductService.getAllProducts();
  }

  @Get(':id')
  @ApiResponse({
    type: ApiGetImagePreviewModel,
    status: HttpStatus.OK,
  })
  getProductById(@Param('id', ParseUUIDPipe) id: string): Promise<ApiGetProductModel> {
    return this._ProductService.getProductById(id);
  }

  @Delete(':id')
  @ApiResponse({ status: HttpStatus.OK })
  deleteProduct(@Param('id', ParseUUIDPipe) id: string) {
    return this._ProductService.deleteProduct(id);
  }
}
