import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsDate, IsOptional, IsNotEmpty } from 'class-validator';

export class CreateBusDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    name: 'bus name',
    description: "bus name is required",
    type: String,
    example: 'Dhaka Chaka',
  })
  bus_name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    name: 'type name',
    description: "bus type is required",
    type: String,
    example: 'AC or NON-AC',
  })
  type: string; // e.g., AC, non-AC

  @IsDate()
  @IsNotEmpty()
  @ApiProperty({
    name: 'bus departure time',
    description: "bus departure time is required",
    type: Date,
    example: '1 am',
  })
  departure_time: Date;

  @IsDate()
  @IsNotEmpty()
  @ApiProperty({
    name: 'bus arrival time',
    description: "buses arrival time required",
    type: Date,
    example: '10 pm ',
  })
  arrival_time: Date;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    name: 'bus from',
    description: "from where bus starts",
    type: Number,
    example: 'Dhaka',
  })
  readonly fromlocation: number; // References Location ID

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    name: 'to location',
    description: "bus to required",
    type: Number,
    example: 'Jessore',
  })
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
