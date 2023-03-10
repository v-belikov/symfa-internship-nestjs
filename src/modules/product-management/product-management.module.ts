import { Module } from '@nestjs/common';

import { PRODUCT_MANAGEMENT_CONTROLLERS } from '@modules/product-management/controllers';
import { PRODUCT_MANAGEMENT_SERVICES } from '@modules/product-management/services';

@Module({
  controllers: [...PRODUCT_MANAGEMENT_CONTROLLERS],
  providers: [...PRODUCT_MANAGEMENT_SERVICES],
})
export class ProductManagementModule {}
