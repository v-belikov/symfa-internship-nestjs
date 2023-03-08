import { Injectable } from '@nestjs/common';

import { RolesEnum } from '@shared/user/roles.enum';

import { IUser } from '../user.interface';

export type User = IUser;

@Injectable()
export class UsersService {
  private readonly _users: Array<any> = [
    {
      id: '1',
      email: '1@mail.ru',
      username: 'john',
      password: 'changeme',
      roles: [RolesEnum.User],
    },
    {
      id: '2',
      email: '2@mail.ru',
      username: 'maria',
      password: 'guess',
      roles: [RolesEnum.User],
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this._users.find((user: any) => user.username === username);
  }
}
