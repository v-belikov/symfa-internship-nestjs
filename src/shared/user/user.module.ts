import { Module } from '@nestjs/common';
import { USERS_SERVICES } from './services';

@Module({
  providers: [...USERS_SERVICES],
  exports: [...USERS_SERVICES],
})
export class UsersModule {}