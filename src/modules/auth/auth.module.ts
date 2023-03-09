import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { UsersModule } from '../users/users.module';
import { AuthService } from './services/auth.service';
import { jwtConstants } from './constants';

@Module({
  imports: [UsersModule, JwtModule.register({ secret: jwtConstants.secret })],
  providers: [AuthService],
})
export class AuthModule {}
