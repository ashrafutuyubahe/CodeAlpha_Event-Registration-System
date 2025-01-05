import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from 'src/dtos/SignInDto.dto';
import { AuthGuard } from '@nestjs/passport';
import { Request } from '@nestjs/common';
import { RegisterDto } from 'src/dtos/RegisterDto.dto';

@Controller('auth')
export class AuthController {

    constructor(
      
        private readonly authSerice:AuthService
    ){}

   
  @Post('register')
  async registers(
   @Body() registerDto:RegisterDto
  ) {
    return this.authSerice.registerUsers(registerDto);
    
  }

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {
    const userData = req.user;

    const token = await this.authSerice.generateTOken({
      userEmail: userData.userEmail,
      userId: userData.id,
      userName: userData.userEmail,
    });

    return {
      message: 'Logged in successfully',
      token,
    };
  }

  @UseGuards(AuthGuard)
  @Get('protectedRoute')
  protectedResourceRoute(@Request() req) {
    return {
      message: 'hello here is the protected resources',
      user: req.user,
    };
  }

  
}
