import { Controller } from '@nestjs/common';

import { ProductManagementService } from '@modules/product-management/services';

@Controller('admin')
export class ProductManagementController {
  constructor(private readonly _productManagementService: ProductManagementService) {}
}
