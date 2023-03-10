import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UserEntity } from '@entities/users';
import { UpdateUserDto } from '@modules/user-management/models';

@Injectable()
export class UserManagementService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly _userRepository: Repository<UserEntity>,
  ) {}

  async updateUser(email: string, dto: UpdateUserDto): Promise<UpdateUserDto> {
    await this._userRepository.update({ email }, dto);

    return dto;
  }
}
