import { DynamicModule } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';

import { JwtStrategy, LocalStrategy } from './models';
import { USERS_SERVICES } from './services';

export class UserModule {
  static forRoot(): DynamicModule {
    const providers = [...USERS_SERVICES, LocalStrategy, JwtStrategy, PassportModule];

    return {
      module: UserModule,
      providers,
      exports: providers,
    };
  }
}
