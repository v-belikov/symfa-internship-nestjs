import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { IUser } from '@modules/users/user.interface';

import { UsersService } from '../../users/services/users.service';
// const saltRounds = 7;

// bcrypt.hash(JwtService, saltRounds, function (err, hash) {
// });

@Injectable()
export class AuthService {
  constructor(private _usersService: UsersService, private _jwtService: JwtService) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this._usersService.findOne(username);

    if (user && user.password === pass) {
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

    return { instance_jwtService: this._jwtService.sign(user) };
  }

  async logoutUser(username: string) {
    return { instance_jwtService: this._jwtService.sign(username) };
    // return this._jwtService.sign(username);
  }
}
