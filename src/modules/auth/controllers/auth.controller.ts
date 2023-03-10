import { Controller, Post, Request } from '@nestjs/common';

import { IUserRequest } from '@modules/users/user.interface';

// eslint-disable-next-line no-restricted-imports
import { AuthService } from '../services/auth.service';

@Controller('auth/login')
export class AuthController {
  constructor(private readonly _authService: AuthService) {}

  @Post()
  async loginUser(@Request() request: IUserRequest) {
    return this._authService.loginUser(request.username, request.password);
  }

  @Post()
  async logoutUser(@Request() request: IUserRequest) {
    return this._authService.logoutUser(request.username);
  }
}
