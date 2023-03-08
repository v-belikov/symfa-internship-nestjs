import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class AuthDto {
  @IsNotEmpty()
  @IsString()
  @Length(3)
  username: string;

  @IsEmail(undefined, { message: 'Incorrect mail' })
  email: string;

  @IsNotEmpty()
  @IsString()
  @Length(8, 32, { message: 'Min length 8 symbols' })
  password?: string;
}
