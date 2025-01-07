import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Users } from './schema/user.schema';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
    validateUser(userEmail: string, userPassword: string) {
      throw new Error('Method not implemented.');
    }

    constructor(
        
        @InjectRepository(Users)
        private readonly userRepository:Repository<Users>
    ){}

    async findAllUsers(){
    return this.userRepository.find();
    }

  
}
