import { IsString, IsNumber, IsBoolean, IsOptional, IsNotEmpty } from 'class-validator';

export class CreateSeatDto {
  @IsNumber()
  @IsOptional()
  busId?: number;

  @IsNumber()
  @IsOptional()
  trainId?: number;

  @IsString()
  @IsNotEmpty()
  seat_number: string;

  @IsBoolean()
  @IsOptional()
  is_available?: boolean;
}
export class UpdateSeatDto {
  @IsNumber()
  @IsOptional()
  busId?: number;

  @IsNumber()
  @IsOptional()
  trainId?: number;

  @IsString()
  @IsOptional()
  seat_number?: string;

  @IsBoolean()
  @IsOptional()
  is_available?: boolean;
}
