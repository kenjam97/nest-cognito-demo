import { IsEmail } from 'class-validator';

export class AuthLoginUserDto {
  @IsEmail()
  readonly email: string;

  readonly password: string;
}
