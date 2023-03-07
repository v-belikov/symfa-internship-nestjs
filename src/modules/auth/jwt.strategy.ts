import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { jwtConstants } from './constants';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    //настройки которые необходимо передать в класс Strategy
    super({
      //откуда получаем токен
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      //если у токена истек срок годности то он будет считаться недействительным
      ignoreExpiration: false,
      //сам ключ, которым мы подписывали токен
      secretOrKey: jwtConstants.secret,
    });
  }

  async validate(payload: any) {
    return {
        userId: payload.sub,
        username: payload.username,
        roles: payload.roles,
    };
}
}