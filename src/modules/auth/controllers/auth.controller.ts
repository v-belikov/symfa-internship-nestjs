import { Body, Controller, Delete, Get, Post, Put, Request } from '@nestjs/common';

import { IsAuthenticated } from '@shared/user';

import { AuthService } from '../services';
@Controller()
export class AuthController {
  constructor(private readonly _authService: AuthService) {}

  @Post('auth/login')
  async login(@Body() { email, password }: any) {
    return this._authService.login(email, password);
  }

  @IsAuthenticated()
  @Get('profile')
  getProfile(@Request() req: any) {
    return req.user;
  }

  @Post('register')
  async register(@Body() user: any) {
    return this._authService.createUser(user);
  }

  @Delete('remove')
  async remove(@Body() user: any) {
    return this._authService.removeUser(user);
  }

  @Put('update')
  async update(@Body() user: any) {
    return this._authService.updateUser(user);
  }
}
