import { Body, Delete, Get, HttpStatus, Param, ParseUUIDPipe, Patch, Post, Query } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { ProductsController as Controller } from '../decorators';
import { ApiGetProductModel, ChangeOrderDto, UploadProductDto } from '../models';
import { ProductParentEntityService } from '../services';

@Controller('preview')
@ApiTags('images/preview')
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

  @Post()
  @ApiResponse({ status: HttpStatus.OK, type: 'string', description: 'uuid' })
  uploadProduct(@Body() uploadedProduct: UploadProductDto): Promise<string> {
    return this._productService.uploadProduct(uploadedProduct);
  }

  @Patch()
  @ApiResponse({ status: HttpStatus.OK })
  changeOrder(@Query('productId', ParseUUIDPipe) id: string, @Body() { order }: ChangeOrderDto) {
    return this._productService.changeOrder(id, order);
  }

  @Delete(':id')
  @ApiResponse({ status: HttpStatus.OK })
  deleteProduct(@Param('id', ParseUUIDPipe) id: string) {
    return this._productService.deleteProduct(id);
  }
}
