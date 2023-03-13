import { Body, Controller, Delete, Put } from '@nestjs/common';

import { UserManagementService } from '@modules/user-management/services';

@Controller('admin')
export class UserManagementController {
  constructor(private readonly _userManagementService: UserManagementService) {}
  @Put('update')
  async update(@Body() user: any) {
    return this._userManagementService.updateUser(user);
  }

  @Delete('delete')
  async delete(@Body() user: any) {
    return this._userManagementService.deleteUser(user);
  }
}
