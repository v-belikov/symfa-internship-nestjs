import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

// import { Config } from '@core/config';
import { UserEntity } from '@entities/user';
import { CreateUserDto } from '@modules/users';
import { UsersService } from '@modules/users/services';

// import bcrypt from 'bcrypt';

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

  async createUser(user: CreateUserDto): Promise<UserEntity> {
    const newUser = new UserEntity();

    Object.assign(newUser, user);

    return await this._usersRepository.save(newUser);
  }

  generateJwt(user: UserEntity): string {
    return this._jwtService.sign({
      id: user.id,
      username: user.username,
      email: user.email,
    });
  }

  buildUserResponse(user: UserEntity): any {
    return {
      user: { ...user, token: this.generateJwt(user) },
    };
  }

  async getAll(): Promise<UserEntity[]> {
    return this._usersRepository.find({
      order: {
        createdAt: 'asc',
      },
    });
  }
}
