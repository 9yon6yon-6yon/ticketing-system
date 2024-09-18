import { IsString, IsNumber, IsDate, IsOptional, IsNotEmpty } from 'class-validator';

export class CreateBusDto {
  @IsString()
  @IsNotEmpty()
  bus_name: string;

  @IsString()
  @IsNotEmpty()
  type: string; // e.g., AC, non-AC

  @IsDate()
  @IsNotEmpty()
  departure_time: Date;

  @IsDate()
  @IsNotEmpty()
  arrival_time: Date;

  @IsNumber()
  @IsNotEmpty()
  readonly fromlocation: number; // References Location ID

  @IsNumber()
  @IsNotEmpty()
  readonly tolocation: number; // References Location ID
}


export class UpdateBusDto {
  @IsString()
  @IsOptional()
  bus_name?: string;

  @IsString()
  @IsOptional()
  type?: string; // e.g., AC, non-AC

  @IsDate()
  @IsOptional()
  departure_time?: Date;

  @IsDate()
  @IsOptional()
  arrival_time?: Date;

  @IsNumber()
  @IsNotEmpty()
  readonly fromlocation: number; // References Location ID

  @IsNumber()
  @IsNotEmpty()
 readonly tolocation: number; // References Location ID
}
