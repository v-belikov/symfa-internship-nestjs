import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Config } from '@core/config';
import { UserEntity } from '@entities/user';
import { CreateUserDto, IUserResponse } from '@modules/users';

import { LoginUserDto } from '../../users/login-user.dto';

import { compare } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly _jwtService: JwtService,
    @InjectRepository(UserEntity)
    private readonly _usersRepository: Repository<UserEntity>,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<UserEntity> {
    const userByEmail = await this._usersRepository.findOneBy({
      email: createUserDto.email,
    });

    const userByUsername = await this._usersRepository.findOneBy({
      username: createUserDto.username,
    });

    if (userByEmail || userByUsername) {
      throw new HttpException('email or name already has registrated', HttpStatus.UNPROCESSABLE_ENTITY);
    }

    const newUser = new UserEntity();

    Object.assign(newUser, createUserDto);

    return await this._usersRepository.save(newUser);
  }

  findById(id: any): Promise<UserEntity> {
    return this._usersRepository.findOneBy(id);
  }

  async login(loginUserDto: LoginUserDto): Promise<UserEntity> {
    const user = await this._usersRepository
      .createQueryBuilder('user')
      .select(['user.id', 'user.username', 'user.email', 'user.password'])
      .where('user.email = :email', { email: loginUserDto.email })
      .getOne();

    console.log('user: ' + user);

    if (!user) {
      throw new HttpException(`user doesn't exist`, HttpStatus.UNPROCESSABLE_ENTITY);
    }

    const isPasswordCorrect = await compare(loginUserDto.password, user.password);

    if (!isPasswordCorrect) {
      throw new HttpException('password in not correct', HttpStatus.UNPROCESSABLE_ENTITY);
    }

    delete user.password;

    return user;
  }

  generateJwt(user: UserEntity): string {
    console.log(user);

    return this._jwtService.sign(
      {
        id: user.id,
        username: user.username,
        email: user.email,
      },
      { secret: Config.get.hashKeyForJwtToken },
    );
  }

  buildUserResponse(user: UserEntity): IUserResponse {
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
