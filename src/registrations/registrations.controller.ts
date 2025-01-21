import {
    Body,
    Controller,
    Get,
    Param,
    Post,
    Put,
    Delete,
    NotFoundException,
    BadRequestException,
  } from '@nestjs/common';
  import { RegistrationsService } from '../registrations/registrations.service';
  import { CreateRegistrationDto } from '../dtos/CreateRegistrationDto.dto';
  import { UpdateRegisterDto } from '../dtos/updateRegisterDto.dto';
  
  @Controller('registrations')
  export class RegistrationController {
    constructor(private readonly registrationService: RegistrationsService) {}
  
    
    @Get()
    async findAllRegistration() {
      return await this.registrationService.findAll();
    }
  
  
    @Get(':id')
    async findOne(@Param('id') id: number) {
      const registration = await this.registrationService.findOne(id);
      if (!registration) {
        throw new NotFoundException(`Registration with ID ${id} not found`);
      }
      return registration;
    }
  
   
    @Post()
    async create(@Body() createRegistrationDto: CreateRegistrationDto) {
      return await this.registrationService.create(createRegistrationDto);
    }
  
   
    @Put(':id')
    async update(
      @Param('id') id: number,
      @Body() updateRegistrationDto: UpdateRegisterDto,
    ) {
      const updated = await this.registrationService.update(
        id,
        updateRegistrationDto,
      );
      if (!updated) {
        throw new NotFoundException(`Registration with ID ${id} not found`);
      }
      return updated;
    }
  
    // Delete a registration
    @Delete(':id')
    async remove(@Param('id') id: number) {
      const deleted = await this.registrationService.remove(id);
      if (!deleted) {
        throw new NotFoundException(`Registration with ID ${id} not found`);
      }
      return { message: `Registration with ID ${id} deleted successfully` };
    }
  }
  