import { Module } from '@nestjs/common';

import { ORDER_CONTROLLERS } from './controllers';
import { ORDER_SERVICES } from './services';

@Module({
  controllers: [...ORDER_CONTROLLERS],
  providers: [...ORDER_SERVICES],
})
export class ProductsModule {}
