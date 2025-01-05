import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { LocalStrategy } from 'src/strategies/Local.strategy';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { Users } from 'src/user/schema/user.schema';
import { UserModule } from 'src/user/user.module';

@Module({
  imports:[
    TypeOrmModule.forFeature([Users]),
    JwtModule.register({
    secret:'secreteKey',
    signOptions:{expiresIn:'1h'}

    }),
    UserModule,
    
],
  providers: [AuthService,LocalStrategy],
  controllers: [AuthController],
   exports: [AuthModule],
})
export class AuthModule {}
