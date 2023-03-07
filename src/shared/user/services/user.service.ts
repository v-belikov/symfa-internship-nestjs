import { Injectable } from '@nestjs/common';
import { Users } from '../../../entities/user/user.entity';
import { Role } from '../role.enum';

export type User = Users;

@Injectable()
export class UsersService {
  private readonly users = [
    {
      id: 1,
      userName: 'anna',
      email: 'ssss',
      password: 'changeme',
      roles: [Role.User],
    },
    {
      id: 2,
      userName: 'maria',
      email: 'hhhh',
      password: 'guess',
      roles: [Role.Admin],
    },
  ];

  async findOne(userName: string): Promise<User | undefined> {
    return this.users.find(user => user.userName === userName);
  }
}