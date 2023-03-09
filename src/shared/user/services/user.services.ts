import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UserEntity } from '@entities/users';

import { IUser } from '../user.interface';

export type User = IUser;

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly _userRepository: Repository<UserEntity>,
  ) {}

  async findOneByUsername(username: string) {
    return this._userRepository.findOne({ where: { username } });
  }

  async findOneByEmail(email: string) {
    return this._userRepository.findOne({ where: { email } });
  }
}
