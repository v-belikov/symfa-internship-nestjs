import { Body, Controller, Delete, Put } from '@nestjs/common';

import { ProductManagementService } from '@modules/product-management/services';

@Controller('admin/products')
export class ProductManagementController {
  constructor(private readonly _productManagementService: ProductManagementService) {}

  @Put('update')
  async update(@Body() product: any) {
    return this._productManagementService.updateProduct(product);
  }

  @Delete('delete')
  async delete(@Body() product: any) {
    return this._productManagementService.deleteProduct(product);
  }
}
