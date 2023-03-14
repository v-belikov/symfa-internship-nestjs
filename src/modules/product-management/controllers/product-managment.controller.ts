import { Get, HttpStatus } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { ApiGetProductsPreviewModel } from '@modules/products/models';

import { Order_Controller as Controller } from '../decorators';
import { OrderService } from '../services';

@Controller('')
@ApiTags('order')
export class OrderController {
  constructor(private _orderService: OrderService) {}

  @Get()
  @ApiResponse({
    type: ApiGetProductsPreviewModel,
    status: HttpStatus.OK,
    isArray: true,
  })
  getProducts() {
    return this._orderService.getProducts();
  }
}
