import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UserEntity } from '@entities/user';
import { IUserRequest } from '@modules/users/user.interface';

export type User = IUserRequest;

@Injectable()
export class UsersService {
  constructor(
    // private readonly _usersService: UsersService,
    @InjectRepository(UserEntity)
    private readonly _usersRepository: Repository<UserEntity>,
  ) {}
}
