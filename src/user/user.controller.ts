import { Controller, Get } from '@nestjs/common';

@Controller('nest_security_api/v1')
export class UserController {

    

 @Get('/users')
 getAllUsers(){
    return "users[]";
 }

 
}
