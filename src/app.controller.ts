import { Controller, Get, UseGuards,Request } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';

@Controller("Event_mng_syst/v1/auth")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/hello")
  getHello(): string {
    return this.appService.getHello();
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
