import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './schema/user.schema';
import { JwtModule } from '@nestjs/jwt';
import { LocalStrategy } from 'src/strategies/Local.strategy';

@Module({
  imports:[
    TypeOrmModule.forFeature([Users]),
    JwtModule.register({
    secret:'secreteKey',
    signOptions:{expiresIn:'1h'}

    })
],
  controllers: [UserController],
  providers: [UserService,LocalStrategy],
  exports: [UserService],
})
export class UserModule {}


