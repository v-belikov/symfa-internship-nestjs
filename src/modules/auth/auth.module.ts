import { Module } from '@nestjs/common';
import { AUTH_SERVICES } from './services';
import { UsersModule } from '@shared/user';
import { JwtStrategy } from './jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { AuthController } from './controllers/auth.controller';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [...AUTH_SERVICES, LocalStrategy, JwtStrategy],
  controllers: [AuthController],
  exports: [...AUTH_SERVICES],
})
export class AuthModule {}
