import { Controller, Get, UseGuards,Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';


@Controller('Event_mng_syst/v1')
export class UserController {

    

 @Get('/users')
 getAllUsers(){
    return "users[]";
 }



 @UseGuards(AuthGuard)
  @Get('/protectedRoute')
 protectedResourceRoute(@Request() req) {
   return {
     message: 'hello here is the protected resources',
     user: req.user,
   };
 }
 
}
