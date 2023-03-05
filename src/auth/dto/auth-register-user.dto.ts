import { IsEmail, IsString, Matches } from 'class-validator';

export class AuthRegisterUserDto {
  @IsString()
  readonly name: string;

  @IsEmail()
  readonly email: string;

  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, {
    message: 'Password too weak',
  })
  readonly password: string;
}
