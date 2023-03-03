import { Module } from '@nestjs/common';

import { PRODUCTS_CONTROLLERS } from './controllers';
import { PRODUCTS_SERVICES } from './services';

@Module({
  controllers: [...PRODUCTS_CONTROLLERS],
  providers: [...PRODUCTS_SERVICES],
})
export class ProductsModule {}
