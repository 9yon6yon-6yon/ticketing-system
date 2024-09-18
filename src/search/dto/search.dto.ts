import { ApiProperty } from "@nestjs/swagger";
import { IsDateString, IsNotEmpty, IsString } from "class-validator";

export class SearchDto {
    @IsString()
    @IsNotEmpty() 
    @ApiProperty({
    name: 'from',
    description: "id of the location",
    type: Number,
    example: 'Dhaka',
    })
    readonly from: number;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
      name: 'to',
      description: "id of the location",
      type: Number,
      example: 'Khulna',
    })
    readonly to: number;
    
    
    @IsDateString()
    @IsNotEmpty() 
    @ApiProperty({
      name: 'date',
      description: "Travelling date",
      type: String,
      example: '2024-09-19',
    })
    readonly date: string;
  }
  