import { IsEmail, Length } from 'class-validator';

export class CreateUserDto {
  @Length(3, 32, { message: 'Min length 3 symbols' })
  username: string;

  @IsEmail(undefined, { message: 'Incorrect mail' })
  email: string;

  @Length(8, 32, { message: 'Min length 8 symbols' })
  password?: string;
}
