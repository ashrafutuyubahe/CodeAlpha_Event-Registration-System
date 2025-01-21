import {
  IsNumber,
  IsDate,
  IsString,
  IsNotEmpty,
  isNotEmpty,
} from 'class-validator';

export class CreateRegistrationDto {
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
