import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';

import { UserEntity } from '@entities/user';
import { CreateUserDto, LoginUserDto } from '@modules/users';

import { AuthService } from '../services/auth.service';

@Controller()
export class AuthController {
  constructor(private readonly _authService: AuthService) {}

  @Get('users')
  async getAll(): Promise<UserEntity[]> {
    return this._authService.getAll();
  }

  @Post('login/auth')
  @UsePipes(new ValidationPipe())
  async createUser(@Body('user') createUserDto: CreateUserDto): Promise<any> {
    const user = await this._authService.createUser(createUserDto);

    return this._authService.buildUserResponse(user);
  }

  @Post('login')
  @UsePipes(new ValidationPipe())
  async login(@Body('user') loginUserDto: LoginUserDto): Promise<UserEntity> {
    const user = await this._authService.login(loginUserDto);

    return this._authService.buildUserResponse(user);
  }
}
