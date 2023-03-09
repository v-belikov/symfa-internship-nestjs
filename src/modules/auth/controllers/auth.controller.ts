import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';

import { AuthService } from '@modules/auth/services';
import { CreateUserDto } from '@shared/user';
import { userLoginDTO } from '@shared/user/dto';
import { JwtAuthGuard } from '@shared/user/guards/jwt-auth.guard';

@Controller()
export class AuthController {
  constructor(private readonly _authService: AuthService) {}

  @Post('registration')
  registration(@Body() dto: CreateUserDto) {
    return this._authService.registration(dto);
  }

  @Post('auth/login')
  async login(@Body() dto: userLoginDTO) {
    return this._authService.login(dto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req: any) {
    return req.user;
  }
}
