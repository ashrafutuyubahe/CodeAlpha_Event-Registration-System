import { Module } from '@nestjs/common';
import { RegistrationsController } from './registrations.controller';

@Module({
  controllers: [RegistrationsController]
})
export class RegistrationsModule {}
