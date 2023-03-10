import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Config } from '@core/config';
import { UserEntity } from '@entities/user';
import { UsersService } from '@modules/users/services';
import { IUserRequest } from '@modules/users/user.interface';

import bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly _usersService: UsersService,
    private readonly _jwtService: JwtService,
    @InjectRepository(UserEntity)
    private readonly _usersRepository: Repository<UserEntity>,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this._usersService.findOne(username);

    if (user && user.password === pass) {
      const { password, ...result } = user;

      return result;
    }

    return null;
  }

  async registrationUser(username: string, password: string) {
    const user: IUserRequest = {
      username: username,
      password: password,
    };

    user.password = await bcrypt.hash(password, Config.get.hashKey);

    await this._usersRepository.create(user);

    return user;
  }

  async loginUser(username: string, password: string) {
    const user: IUserRequest = {
      username: username,
      password: password,
    };

    return { accessToken: this._jwtService.sign(user) };
  }

  async logoutUser(username: string) {
    const user = { username: username };

    return { accessToken: this._jwtService.sign(user) };
  }
}
