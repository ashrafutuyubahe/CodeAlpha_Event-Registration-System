import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { EventModule } from './event/event.module';
import { RegistrationsModule } from './registrations/registrations.module';
import { RegistrationController } from './registrations/registrations.controller';

@Module({
  imports: [
  ConfigModule.forRoot({
    isGlobal:true,
    envFilePath:".env"
  }),
  TypeOrmModule.forRoot({
    type: 'postgres',
    host: process.env.host,
    port: 5432,
    username: 'postgres',
    password: process.env.DB_PASSWORD,
    database: process.env.db_NAME,
    entities: [],
    synchronize: true,
  }),
  EventModule,
  RegistrationsModule,
],
  controllers: [AppController, RegistrationController],
  providers: [AppService],
})
export class AppModule {}
