import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Config } from '@core/config';
import { User } from '@entities/user';

import { AuthUserDto } from '../models';

import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private _usersRepository: Repository<User>,
  ) {}

  //если пароль верный то вернуть пользователя
  async getAuthenticatedUser(email: string, plainTextPassword: string): Promise<any> {
    const user = await this.findOneByEmail(email);

    await this._verifyPassword(plainTextPassword, user.password);
    delete user.password;

    return user;
  }

  async findOneByEmail(inputEmail: string): Promise<User | undefined> {
    const user = await this._usersRepository
      .createQueryBuilder('user')
      .select(['user.id', 'user.username', 'user.email', 'user.password'])
      .where('user.email = :inputEmail', { inputEmail })
      .getOne();

    if (user) {
      return user;
    }

    throw new BadRequestException('Wrong email');
  }

  async findOneById(id: string): Promise<User | undefined> {
    const user = await this._usersRepository
      .createQueryBuilder('user')
      .select(['user.id', 'user.username', 'user.email', 'user.password'])
      .where('user.id = :id', { id })
      .getOne();

    if (user) {
      return user;
    }

    throw new BadRequestException('Wrong email');
  }

  async create({ password: plainPassword, ...userData }: AuthUserDto) {
    try {
      const password = await bcrypt.hash(plainPassword, +Config.get.hashSalt);
      const user = await this._usersRepository.create({ ...userData, password });

      await this._usersRepository.save(user);

      delete user.password;

      return user;
    } catch (erorr) {
      throw new BadRequestException('user with that email already exists');
    }
  }

  async createUserWithoutPass(userData: AuthUserDto) {
    try {
      const plainPassword = 'defaultPass';
      const password = await bcrypt.hash(plainPassword, +Config.get.hashSalt);

      const createdUser = await this._usersRepository.create({ ...userData, password });

      await this._usersRepository.save(createdUser);

      return createdUser;
    } catch (erorr) {
      throw new BadRequestException('user with that email already exists');
    }
  }

  async remove(user: AuthUserDto) {
    const removedUser = await this.findOneByEmail(user.email);

    return await this._usersRepository.delete(removedUser.id);
  }

  async update({ password: plainPassword, ...userData }: AuthUserDto) {
    const updatedUser = await this.findOneByEmail(userData.email);
    const password = await bcrypt.hash(plainPassword, +Config.get.hashSalt);

    updatedUser.password = password;
    updatedUser.username = userData.username;
    await this._usersRepository.save(updatedUser);

    return updatedUser;
  }

  async updateUserWithoutPass(userData: AuthUserDto) {
    const updatedUser = await this.findOneById(userData.id);
    const plainPassword = 'defaultPass';

    const password = await bcrypt.hash(plainPassword, +Config.get.hashSalt);

    updatedUser.password = password;
    updatedUser.username = userData.username;
    updatedUser.email = userData.email;
    await this._usersRepository.save(updatedUser);

    return updatedUser;
  }

  async getUsers() {
    const queryBuilder = this._usersRepository
      .createQueryBuilder('user')
      .select(['user.id', 'user.username', 'user.email', 'user.password']);

    return queryBuilder.getMany();
  }

  //для хэширования пароля
  private async _verifyPassword(password: string, hashedPassword: string) {
    const isPasswordMatching = await bcrypt.compare(password, hashedPassword);

    if (!isPasswordMatching) {
      throw new BadRequestException('Wrong password');
    }
  }
}
