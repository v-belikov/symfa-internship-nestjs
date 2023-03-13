import { Module } from '@nestjs/common';

import { USER_MANAGEMENT_CONTROLLERS } from '@modules/user-management/controllers';
import { USER_MANAGEMENT_SERVICES } from '@modules/user-management/services';
import { UsersModule } from '@shared/user';

@Module({
  imports: [UsersModule],
  controllers: [...USER_MANAGEMENT_CONTROLLERS],
  providers: [...USER_MANAGEMENT_SERVICES],
})
export class UserManagementModule {}
