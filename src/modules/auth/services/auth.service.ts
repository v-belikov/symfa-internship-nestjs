import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { AuthUserDto, UserService } from '@shared/user';

@Injectable()
export class AuthService {
  constructor(private readonly _userService: UserService, private readonly _jwtService: JwtService) {}

  //возвращает токен юзера
  async login(email: string, plainTextPassword: string) {
    const user = await this._userService.getAuthenticatedUser(email, plainTextPassword);
    const payload = {
      username: user.username,
      email: user.email,
      sub: user.id,
    };

    return {
      access_token: this._jwtService.sign(payload),
    };
  }

  async createUser(user: AuthUserDto) {
    return this._userService.createUserWithoutPass(user);
  }

  async removeUser(user: AuthUserDto) {
    return this._userService.remove(user);
  }

  async updateUser(user: AuthUserDto) {
    return this._userService.updateUserWithoutPass(user);
  }

  async getUsers() {
    return this._userService.getUsers();
  }
}
