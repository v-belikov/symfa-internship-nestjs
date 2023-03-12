import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UserEntity } from '@entities/user';
import { CreateUserDto } from '@modules/users';
import { UsersService } from '@modules/users/services';

import { LoginUserDto } from '../../users/login-user.dto';

import { compare } from 'bcrypt';

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

  async createUser(createUserDto: CreateUserDto): Promise<any> {
    const userByEmail = await this._usersRepository.findOneBy({
      email: createUserDto.email,
    });

    if (userByEmail) {
      throw new HttpException('email already has registrated', HttpStatus.UNPROCESSABLE_ENTITY);
    }

    const newUser = new UserEntity();

    Object.assign(newUser, createUserDto);

    return await this._usersRepository.save(newUser);
  }

  findById(id: any): Promise<UserEntity> {
    return this._usersRepository.findOne(id);
  }

  generateJwt(user: UserEntity): string {
    return this._jwtService.sign({
      id: user.id,
      username: user.username,
      email: user.email,
    });
  }

  async login(loginUserDto: LoginUserDto): Promise<UserEntity> {
    const user = await this._usersRepository.findOneBy({
      email: loginUserDto.email,
    });

    console.log(user);

    if (!user) {
      throw new HttpException(`user doesn't exist`, HttpStatus.UNPROCESSABLE_ENTITY);
    }

    const isPasswordCorrect = await compare(loginUserDto.password, user.password);

    if (!isPasswordCorrect) {
      throw new HttpException('password in not corrected', HttpStatus.UNPROCESSABLE_ENTITY);
    }

    return user;
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
