import { Body, Controller, Get, Post, Req } from '@nestjs/common';

import { UserEntity } from '@entities/user';
import { CreateUserDto, IUserResponse, LoginUserDto } from '@modules/users';

import { AuthService } from '../services/auth.service';

@Controller()
export class AuthController {
  constructor(private readonly _authService: AuthService) {}

  @Get('users')
  async getAll(): Promise<UserEntity[]> {
    return this._authService.getAll();
  }

  @Post('user')
  async createUser(@Body('user') createUserDto: CreateUserDto): Promise<IUserResponse> {
    const user = await this._authService.createUser(createUserDto);

    return this._authService.buildUserResponse(user);
  }

  @Post('users/login')
  async login(@Body('user') loginUserDto: LoginUserDto): Promise<IUserResponse> {
    const user = await this._authService.login(loginUserDto);

    return this._authService.buildUserResponse(user);
  }

  @Get('user')
  async currentUser(@Req() request: any): Promise<IUserResponse> {
    return this._authService.buildUserResponse(request.headers);
  }
}
