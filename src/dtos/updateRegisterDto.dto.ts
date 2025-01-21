import { IsNotEmpty, IsNumber, IsDate, IsString } from 'class-validator';

export class UpdateRegisterDto {
  @IsNotEmpty()
  @IsNumber()
  eventId: number;

  @IsNotEmpty()
  @IsNumber()
  userId: number;

  @IsNotEmpty()
  @IsDate()
  registrationDate: Date;

  @IsNotEmpty()
  @IsString()
  status: string;
}
