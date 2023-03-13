import { BadRequestException, Body, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Config } from '@core/config';
import { UserEntity } from '@entities/users';
import { jwtConstants } from '@modules/auth/constant';
import { CreateUserDto, UsersService } from '@shared/user';
import { userLoginDTO } from '@shared/user/dto';

import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private _usersService: UsersService,
    private _jwtService: JwtService,
    @InjectRepository(UserEntity)
    private readonly _usersRepository: Repository<UserEntity>,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this._usersService.findOneByUsername(username);

    if (user && user.password === pass) {
      const { password, ...result } = user;

      return result;
    }

    return null;
  }

  async generateJwtToken(user: string) {
    const payload = { user };

    return this._jwtService.sign(payload, {
      secret: jwtConstants.secret,
      expiresIn: '24h',
    });
  }

  async hashPassword(password: string) {
    return bcrypt.hash(password, Config.get.hashSalt);
  }

  async findUserByEmail(email: string) {
    return this._usersRepository.findOne({ where: { email } });
  }

  async registration(dto: CreateUserDto): Promise<CreateUserDto> {
    const existUser = await this.findUserByEmail(dto.email);

    if (existUser) {
      throw new BadRequestException({ message: 'User already exist' });
    }

    dto.password = await this.hashPassword(dto.password);
    await this._usersRepository.create({
      username: dto.username,
      email: dto.email,
      password: dto.password,
    });
    await this._usersRepository.save(dto);

    return dto;
  }

  async login(dto: userLoginDTO) {
    const existUser = await this._usersService.findOneByEmail(dto.email);

    if (!existUser) {
      throw new BadRequestException({ message: 'User not exist' });
    }

    const validatePassword = await bcrypt.compare(dto.password, existUser.password);

    if (!validatePassword) {
      throw new BadRequestException({ message: 'Wrong data' });
    }

    const token = await this.generateJwtToken(dto.email);

    return { ...existUser, token };
  }

  async updateUser(@Body() user: any) {
    return this._usersService.updateUser(user);
  }

  async deleteUser(@Body() user: any) {
    return this._usersService.deleteUser(user);
  }
}
