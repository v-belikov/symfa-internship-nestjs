import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';

import { IUser } from '../users/user.interface';
import { jwtConstants } from './constants';

import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  async validate(payload: IUser) {
    return { username: payload.username, password: payload.password, email: payload.email };
  }
}
