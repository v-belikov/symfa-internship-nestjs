import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsString()
  id: string;

  @ApiProperty()
  @Length(3, 32, { message: 'Username min length 3 symbols' })
  username: string;

  @ApiProperty()
  @IsString()
  @IsEmail(undefined, { message: 'Incorrect mail' })
  email: string;

  @ApiProperty()
  @Length(8, 32, { message: 'Password min length 8 symbols' })
  password?: string;
}
