import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { IUser } from '@modules/users/user.interface';

import { UsersService } from '../../users/services/users.service';

import bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private _usersService: UsersService, private _jwtService: JwtService) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this._usersService.findOne(username);

    const saltRounds = 7;
    const hasPassword = await bcrypt.hash(pass, saltRounds);

    if (user && user.password === hasPassword) {
      const { password, ...result } = user;

      return result;
    }

    return null;
  }

  async loginUser(username: string, password: string) {
    const user: IUser = {
      username: username,
      password: password,
    };

    return { accessToken: this._jwtService.sign(user), refreshToken: this._jwtService.sign(user) };
  }

  async logoutUser(username: string) {
    const user = { username: username };

    return { accessToken: this._jwtService.sign(user), refreshToken: this._jwtService.sign(user) };
    // return this._jwtService.sign(username);
  }
}
