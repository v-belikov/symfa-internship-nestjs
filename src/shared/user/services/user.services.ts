import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UserEntity } from '@entities/users';
import { CreateUserDto } from '@shared/user';

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

  async findOneByID(id: string) {
    return this._userRepository.findOne({ where: { id } });
  }

  async deleteUser(user: any) {
    const userForDeleting = await this.findOneByEmail(user.email);

    return await this._userRepository.delete(userForDeleting.id);
  }

  async updateUser({ ...user }: CreateUserDto) {
    const userForUpdating = await this.findOneByID(user.id);

    console.log(userForUpdating);

    userForUpdating.username = user.username;
    userForUpdating.email = user.email;

    await this._userRepository.save(userForUpdating);

    return userForUpdating;
  }
}
