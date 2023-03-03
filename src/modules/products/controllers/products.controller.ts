import { Get, HttpStatus, Query } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { Products_Controller as Controller } from '../decorators';
import { ApiGetProductsPreviewModel, ProductsDto } from '../models';
import { ProductsService } from '../services';

@Controller('')
@ApiTags('products')
export class ProductsController {
  constructor(private _productsService: ProductsService) {}

  @Get()
  @ApiResponse({
    type: ApiGetProductsPreviewModel,
    status: HttpStatus.OK,
    isArray: true,
  })
  getProducts(@Query() filterParams: ProductsDto) {
    return this._productsService.getProducts(filterParams.sizes);
  }
}
