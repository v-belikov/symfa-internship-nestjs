import { Module } from '@nestjs/common';

import { PRODUCTS_CONTROLLER } from './controllers';
import { PRODUCTS_SERVICES } from './services';

@Module({
  exports: [...PRODUCTS_SERVICES],
  controllers: [...PRODUCTS_CONTROLLER],
  providers: [...PRODUCTS_SERVICES],
})
export class ProductsModule {}
