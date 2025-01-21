import { IsNotEmpty, IsString, IsDate, IsNumber } from 'class-validator';

export class CreateEventDto {
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
