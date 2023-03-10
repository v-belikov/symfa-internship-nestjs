import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';

import { IUserRequest } from '@modules/users/user.interface';

import { Config } from '../../core/config/config';

import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: Config.get.hashKey,
    });
  }

  async validate(payload: IUserRequest) {
    return { username: payload.username, password: payload.password, email: payload.email };
  }
}
