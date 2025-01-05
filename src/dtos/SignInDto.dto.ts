import {IsNotEmpty,IsString,IsEmail} from  "@nestjs/class-validator"

export class SignInDto{
    @IsNotEmpty()
    @IsEmail()
    userEmail:string;

    @IsNotEmpty()
    @IsString()
    userPassword:string;
}


