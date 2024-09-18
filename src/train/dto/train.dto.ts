import { IsString, IsNumber, IsDate, IsOptional, IsNotEmpty } from 'class-validator';

export class CreateTrainDto {
  @IsString()
  @IsNotEmpty()
  train_name: string;

  @IsString()
  @IsNotEmpty()
  type: string; // e.g., Express, Local

  @IsDate()
  @IsNotEmpty()
  departure_time: Date;

  @IsDate()
  @IsNotEmpty()
  arrival_time: Date;

  @IsNumber()
  @IsNotEmpty()
 readonly from_location?: number; // References Location ID

  @IsNumber()
  @IsNotEmpty()
  readonly to_location?: number; // References Location ID
}


export class UpdateTrainDto {
  @IsString()
  @IsOptional()
  train_name?: string;

  @IsString()
  @IsOptional()
  type?: string; // e.g., Express, Local

  @IsDate()
  @IsOptional()
  departure_time?: Date;

  @IsDate()
  @IsOptional()
  arrival_time?: Date;

  @IsNumber()
  @IsNotEmpty()
  from_location?: number; // References Location ID

  @IsNumber()
  @IsNotEmpty()
  to_location?: number; // References Location ID
}
