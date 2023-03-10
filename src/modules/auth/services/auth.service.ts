import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Config } from '@core/config';
import { UserEntity } from '@entities/user';
import { UsersService } from '@modules/users/services';

import { CreateUserDto } from '../../users/user.dto';

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

  async registrationUser(user: CreateUserDto) {
    user.password = await bcrypt.hash(user.password, Config.get.hashKey);

    await this._usersRepository.create(user);

    return user;
  }

  async loginUser(user: CreateUserDto) {
    return { accessToken: this._jwtService.sign(user.username) };
  }

  async logoutUser(user: CreateUserDto) {
    return { accessToken: this._jwtService.sign(user.username) };
  }

  async getAll(): Promise<UserEntity[]> {
    return this._usersRepository.find({
      order: {
        createdAt: 'asc',
      },
    });
  }
}
