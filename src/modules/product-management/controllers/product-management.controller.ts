import { Body, Controller, Put } from '@nestjs/common';

import { ProductManagementService } from '@modules/product-management/services';

@Controller('admin/products')
export class ProductManagementController {
  constructor(private readonly _productManagementService: ProductManagementService) {}

  @Put('update')
  async update(@Body() product: any) {
    return this._productManagementService.updateProduct(product);
  }
}
