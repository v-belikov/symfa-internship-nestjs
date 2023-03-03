import { Delete, Get, HttpStatus, Param, ParseUUIDPipe } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { ProductsController as Controller } from '../decorators';
import { ApiGetProductModel } from '../models';
import { ProductParentEntityService } from '../services';

@Controller('products')
@ApiTags('products')
export class ProductController {
  constructor(private readonly _productService: ProductParentEntityService) {}

  @Get()
  @ApiResponse({
    type: ApiGetProductModel,
    status: HttpStatus.OK,
    isArray: true,
  })
  getAll(): Promise<ApiGetProductModel[]> {
    return this._productService.getAll();
  }

  @Get(':id')
  @ApiResponse({
    type: ApiGetProductModel,
    status: HttpStatus.OK,
  })
  getProductById(@Param('id', ParseUUIDPipe) id: string): Promise<ApiGetProductModel> {
    return this._productService.getProductById(id);
  }

  @Delete(':id')
  @ApiResponse({ status: HttpStatus.OK })
  deleteProduct(@Param('id', ParseUUIDPipe) id: string) {
    return this._productService.deleteProduct(id);
  }
}
