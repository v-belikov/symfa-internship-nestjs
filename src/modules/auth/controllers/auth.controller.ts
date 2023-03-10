import { Body, Controller, Get, Post } from '@nestjs/common';

import { UserEntity } from '@entities/user';
import { CreateUserDto } from '@modules/users';

// eslint-disable-next-line no-restricted-imports
import { AuthService } from '../services/auth.service';

@Controller('login/auth')
export class AuthController {
  constructor(private readonly _authService: AuthService) {}

  @Get()
  async getAll(): Promise<UserEntity[]> {
    return this._authService.getAll();
  }

  @Post()
  async registrationUser(@Body('user') dto: CreateUserDto) {
    return this._authService.registrationUser(dto);
  }

  @Post()
  async loginUser(@Body('user') dto: CreateUserDto) {
    return this._authService.loginUser(dto);
  }

  @Post()
  async logoutUser(@Body('user') dto: CreateUserDto) {
    return this._authService.logoutUser(dto);
  }
}
