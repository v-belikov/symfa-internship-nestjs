import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Config } from '@core/config';
import { UserEntity } from '@entities/users';
import { CreateUserDto, UsersService } from '@shared/user';

import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private _usersService: UsersService,
    private _jwtService: JwtService,
    @InjectRepository(UserEntity)
    private readonly _usersRepository: Repository<UserEntity>,
  ) {}

  async validateUser(login: string, pass: string): Promise<any> {
    const user = await this._usersService.findOne(login);

    if (user && user.password === pass) {
      const { password, ...result } = user;

      return result;
    }

    return null;
  }

  async hashPassword(password: string) {
    return bcrypt.hash(password, Config.get.hashSalt);
  }

  async registration(dto: CreateUserDto): Promise<CreateUserDto> {
    dto.password = await this.hashPassword(dto.password);
    await this._usersRepository.create(dto);

    return dto;
  }

  async login(user: any) {
    console.log(user);
    const payload = { username: user.username, sub: user.userId, roles: user.roles };

    return {
      access_token: this._jwtService.sign(payload),
    };
  }
}
