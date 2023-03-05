import { IsEmail, IsString } from 'class-validator';

export class AuthConfirmPasswordUserDto {
  @IsEmail()
  readonly email: string;

  @IsString()
  readonly code: string;

  readonly newPassword: string;
}
