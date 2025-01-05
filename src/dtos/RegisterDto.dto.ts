import { IsEmail, IsNotEmpty, IsString } from "@nestjs/class-validator";



export class  RegisterDto{

    @IsString()
    @IsNotEmpty()
     userName:string
    @IsNotEmpty()
        @IsEmail()
        userEmail:string;
    
        @IsNotEmpty()
        @IsString()
        userPassword:string;

}