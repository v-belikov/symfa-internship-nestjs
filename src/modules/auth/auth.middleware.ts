import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Response } from 'express';
import { verify } from 'jsonwebtoken';

import { Config } from '../../core/config/config';
import { AuthService } from './services';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private readonly _authService: AuthService) {}
  async use(req: any, res: Response, next: NextFunction) {
    if (!req.headers.authorization) {
      req.user = null;
      next();

      return;
    }

    const token = req.headers.authorization.split(' ')[1];

    console.log(token);

    try {
      const decode = verify(token, Config.get.hashKeyForJwtToken);
      const user = await this._authService.findById(decode.id);

      req.user = user;

      next();
    } catch (err) {
      req.user = null;
      next();
    }
  }
}
