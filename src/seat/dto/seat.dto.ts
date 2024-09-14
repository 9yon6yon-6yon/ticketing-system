import { IsString, IsNumber, IsBoolean, IsOptional, IsNotEmpty } from 'class-validator';

export class CreateSeatDto {
  @IsNumber()
  @IsOptional()
  bus_id?: number;

  @IsNumber()
  @IsOptional()
  train_id?: number;

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
  bus_id?: number;

  @IsNumber()
  @IsOptional()
  train_id?: number;

  @IsString()
  @IsOptional()
  seat_number?: string;

  @IsBoolean()
  @IsOptional()
  is_available?: boolean;
}
