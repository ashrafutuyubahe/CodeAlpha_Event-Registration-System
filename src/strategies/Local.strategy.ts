import { HttpException, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import {Strategy}  from 'passport-local';
import { UserService } from 'src/user/user.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {

  constructor(private authService: UserService) {
    super({
        usernameField: 'userEmail',
        passwordField: 'userPassword',
    });
  }


  async validate(userEmail: string, userPassword: string) {
    const signInDto = {
      userEmail,
      userPassword,
    };

  const result= await this.authService;

    if (!result) {
      throw new HttpException('Invalid credentials', 401);
    }

    return result;
  }
}
