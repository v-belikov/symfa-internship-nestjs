import { Module } from '@nestjs/common';

import { PRODUCT_MANAGEMENT_CONTROLLERS } from '@modules/product-management/controllers';
import { PRODUCT_MANAGEMENT_SERVICES } from '@modules/product-management/services';
import { ProductsModule } from '@modules/products/products.module';

@Module({
  imports: [ProductsModule],
  controllers: [...PRODUCT_MANAGEMENT_CONTROLLERS],
  providers: [...PRODUCT_MANAGEMENT_SERVICES],
})
export class ProductManagementModule {}
