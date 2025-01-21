import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Registration } from './schema/Registration';
import { CreateRegistrationDto } from '../dtos/CreateRegistrationDto.dto';
import { UpdateRegisterDto } from '../dtos/updateRegisterDto.dto';

@Injectable()
export class RegistrationsService {
  constructor(
    @InjectRepository(Registration)
    private readonly registrationRepository: Repository<Registration>,
  ) {}

  
  async findAll(): Promise<Registration[]> {
    return await this.registrationRepository.find();
  }

  
  async findOne(id: number): Promise<Registration | null> {
    return await this.registrationRepository.findOne({ where: { registrationId: id } });
  }


  async create(createRegistrationDto: CreateRegistrationDto){
    const newRegistration = this.registrationRepository.create(createRegistrationDto);
    return await this.registrationRepository.save(newRegistration);
  }


  async update(
    id: number,
    updateRegistrationDto: UpdateRegisterDto,
  ): Promise<Registration | null> {
    const existingRegistration = await this.findOne(id);
    if (!existingRegistration) {
      return null;
    }
    Object.assign(existingRegistration, updateRegistrationDto);
    return await this.registrationRepository.save(existingRegistration);
  }

  
  async remove(id: number): Promise<boolean> {
    const existingRegistration = await this.findOne(id);
    if (!existingRegistration) {
      return false;
    }
    await this.registrationRepository.delete(id);
    return true;
  }
}
