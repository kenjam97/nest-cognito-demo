import { IsEmail } from 'class-validator';

export class AuthChangePasswordUserDto {
  @IsEmail()
  readonly email: string;

  readonly currentPassword: string;

  readonly newPassword: string;
}
