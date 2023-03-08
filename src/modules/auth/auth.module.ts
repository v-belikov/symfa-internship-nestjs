import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

import { AuthController } from '@modules/auth/controllers';
import { JwtStrategy } from '@modules/auth/strategies';
import { UsersModule } from '@shared/user';

import { AuthService } from './services/auth.service';
import { LocalStrategy } from './strategies/local.strategy';
import { jwtConstants } from './constant';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
