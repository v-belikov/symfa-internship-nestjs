import { Injectable } from '@nestjs/common';

import { IUser } from './user.interface';

// This should be a real class/interface representing a user entity

// export type User = any;

@Injectable()
export class UsersService {
  private readonly users = [
    {
      username: 'john',
      email: 'blabla@bail',
      password: 'changeme',
    },
    {
      username: 'maria',
      email: 'blabla_2_@bail',
      password: 'guess',
    },
  ];

  async findOne(username: string): Promise<IUser | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
