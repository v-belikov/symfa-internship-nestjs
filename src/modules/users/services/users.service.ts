import { Injectable } from '@nestjs/common';

// This should be a real class/interface representing a user entity

export type User = any;

@Injectable()
export class UsersService {
  // eslint-disable-next-line @typescript-eslint/typedef
  private readonly _users = [
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

  async findOne(username: string): Promise<User | undefined> {
    // eslint-disable-next-line @typescript-eslint/typedef
    return this._users.find((user) => user.username === username);
  }
}
