import { Module } from '@nestjs/common';
import { RegistrationController } from './registrations.controller';
import { RegistrationsService } from './registrations.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Registration } from './schema/Registration';

@Module({
  imports:[TypeOrmModule.forFeature([Registration])],
  controllers: [RegistrationController],
  providers: [RegistrationsService]
})
export class RegistrationsModule {}
