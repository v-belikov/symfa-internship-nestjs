import { Controller, Post, Request } from '@nestjs/common';
import { IsNotEmpty, IsString } from 'class-validator';

import { IUser } from '@modules/users/user.interface';

// eslint-disable-next-line no-restricted-imports
import { AuthService } from '../services/auth.service';

@Controller()
export class AuthController {
  constructor(private readonly _authService: AuthService) {}

  @IsString()
  @IsNotEmpty()
  @Post('auth/login')
  async loginUser(@Request() request: IUser) {
    return this._authService.loginUser(request.username, request.password);
  }

  @IsString()
  @IsNotEmpty()
  @Post('auth/login')
  async logoutUser(@Request() request: any) {
    return this._authService.logoutUser(request);
  }
}
