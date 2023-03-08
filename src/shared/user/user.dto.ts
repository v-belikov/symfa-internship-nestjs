import { IsNotEmpty, IsString } from 'class-validator';

import { RolesEnum } from '@shared/user/roles.enum';

export class UserDto {
  @IsNotEmpty()
  @IsString()
  readonly id: string;

  @IsNotEmpty()
  @IsString()
  readonly userName: string;

  @IsNotEmpty()
  @IsString()
  readonly password: string;

  @IsNotEmpty()
  @IsString()
  readonly role: RolesEnum;
}
