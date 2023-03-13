import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';

import { IUserResponse } from '@modules/users';

import { Config } from '../../core/config/config';

import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: Config.get.hashKeyForJwtToken,
    });
  }

  async validate(payload: IUserResponse) {
    return { ...payload.user };
  }
}
