import { Module } from '@nestjs/common';

import { SharedModule } from './shared/shared.module';
import { APP_MODULES } from './modules';
import { PRODUCTS_MODULE } from './modules';

@Module({
  imports: [SharedModule.share(), ...APP_MODULES, ...PRODUCTS_MODULE],
  controllers: [],
  providers: [],
})
export class AppModule {}
