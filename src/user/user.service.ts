import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Users } from './schema/user.schema';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {

    constructor(
        
        @InjectRepository(Users)
        private readonly userRepository:Repository<Users>
    ){}

    async findAllUsers(){
    return this.userRepository.find();
    }

  
}
