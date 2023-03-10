import { Body, Controller, Patch, Req } from '@nestjs/common';

import { UpdateUserDto } from '@modules/user-management/models';
import { UserManagementService } from '@modules/user-management/services';

@Controller()
export class UserManagementController {
  constructor(private readonly _userManagementService: UserManagementService) {}

  @Patch('update-user')
  updateUser(@Body() updateDto: UpdateUserDto, @Req() request: any): Promise<UpdateUserDto> {
    const user = request.body;

    return this._userManagementService.updateUser(user.email, updateDto);
  }
}
