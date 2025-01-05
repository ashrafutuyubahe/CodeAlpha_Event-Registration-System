import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { Users } from 'src/user/schema/user.schema';
import { SignInDto } from 'src/dtos/SignInDto.dto';
import { RegisterDto } from 'src/dtos/RegisterDto.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Users)
    private readonly userRepository: Repository<Users>,
    
    private readonly jwtService: JwtService,
  ) {}

  async findUsers() {
    return this.userRepository.find();
  }

  async validateUser(authPayLoad: SignInDto) {
    const { userEmail, userPassword } = authPayLoad;

    const findUsersExists = await this.userRepository.findOne({
      where: { userEmail },
    });

    if (!findUsersExists) {
      return null;
    }

   
    if (findUsersExists.userPassword === userPassword) {
      const { userPassword, ...userData } = findUsersExists;
      return userData;
    }

    return null;
  }

  async generateTOken(userData: {
    userEmail: string;
    userId: number;
    userName: string;
  }) {
    return this.jwtService.sign(userData);
  }

  async registerUsers(
   registerDto:RegisterDto
  ) {

     const {userName,userEmail,userPassword}= registerDto;

    const findUsersExists = await this.userRepository.findOne({
      where: {userEmail,userName},
    });

  
    if (findUsersExists) {
      return 'user already exists';
    }
    
    const saveUser = this.userRepository.create({
      userEmail,
      userName,
      userPassword,
    });

    if (this.userRepository.save(saveUser)) {
      return {
        message: 'registered sucessful',
      };
    }

    return 'failed to register user';
  }
}
