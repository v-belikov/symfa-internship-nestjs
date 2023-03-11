import { Module } from '@nestjs/common';

import { AUTH_CONTROLLERS } from './controllers';
import { AUTH_SERVICES } from './services';

@Module({
  providers: [...AUTH_SERVICES],
  controllers: [...AUTH_CONTROLLERS],
})
export class AuthModule {}
