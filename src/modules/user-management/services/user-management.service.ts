import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UserEntity } from '@entities/users';
import { UsersService } from '@shared/user';

@Injectable()
export class UserManagementService {
  constructor(
    private readonly _usersService: UsersService,
    @InjectRepository(UserEntity)
    private readonly _userRepository: Repository<UserEntity>,
  ) {}

  async updateUser(@Body() user: any) {
    return this._usersService.updateUser(user);
  }

  async deleteUser(@Body() user: any) {
    return this._usersService.deleteUser(user);
  }

  async getAllUsers() {
    const queryBuilder = this._userRepository
      .createQueryBuilder('user')
      .select(['user.id', 'user.username', 'user.email']);

    return queryBuilder.getMany();
  }
}
