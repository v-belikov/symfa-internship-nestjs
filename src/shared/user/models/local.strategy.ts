import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';

import { IUser } from '@entities/user';

import { UserService } from '../services';

import { Strategy } from 'passport-local';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly _userService: UserService) {
    super({
      usernameField: 'email',
      passwordField: 'password',
    });
  }

  async validate(email: string, password: string): Promise<IUser> {
    const user = this._userService.getAuthenticatedUser(email, password);

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
