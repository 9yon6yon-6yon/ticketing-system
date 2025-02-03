import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsDate, IsOptional, IsNotEmpty } from 'class-validator';

export class CreateTrainDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    name: 'train name',
    description: "train name is required",
    type: String,
    example: 'Benapol Express',
  })
  train_name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    name: 'type',
    description: "train type",
    type: String,
    example: 'Express or Local etc',
  })
  type: string; // e.g., Express, Local

  @IsDate()
  @IsNotEmpty()
  @ApiProperty({
    name: 'departure time',
    description: "train  departure time",
    type: Date,
    example: 'time',
  })
  departure_time: Date;

  @IsDate()
  @IsNotEmpty()
  @ApiProperty({
    name: 'arrival time',
    description: "train arrival time",
    type: Date,
    example: 'Benapol Express',
  })
  arrival_time: Date;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    name: 'from location id',
    description: "location id to select",
    type: Number,
    example: 1,
  })
 readonly fromlocation: number; // References Location ID

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    name: 'trains location to reach',
    description: "train going to",
    type: Number,
    example: 2,
  })
  readonly tolocation: number; // References Location ID
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
  fromlocation?: number; // References Location ID

  @IsNumber()
  @IsNotEmpty()
  tolocation?: number; // References Location ID
}
