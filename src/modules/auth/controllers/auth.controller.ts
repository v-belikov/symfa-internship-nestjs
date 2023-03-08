import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';

import { AuthService } from '@modules/auth/services';
import { CreateUserDto } from '@shared/user';
import { JwtAuthGuard } from '@shared/user/guards/jwt-auth.guard';
import { LocalAuthGuard } from '@shared/user/guards/local-auth.guard';

@Controller()
export class AuthController {
  constructor(private readonly _authService: AuthService) {}

  @Post('registration')
  registration(@Body() dto: CreateUserDto) {
    return this._authService.registration(dto);
  }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req: any) {
    return this._authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req: any) {
    return req.user;
  }
}
