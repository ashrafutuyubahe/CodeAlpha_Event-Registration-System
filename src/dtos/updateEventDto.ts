
import { IsDate, isDate, IsNotEmpty, IsNumber, isNumber, IsString, isString } from "class-validator";




export class UpdateEventDto {

    @IsNotEmpty()
    @IsString()
    title: string;

    @IsNotEmpty()
    @IsString()
    description?: string;

    @IsNotEmpty()
    @IsDate()
    eventDate?: Date;

    @IsNotEmpty()
    @IsNumber()
    capacity?: number;
    
    @IsNotEmpty()
    @IsString()
    location?: string;
  }

