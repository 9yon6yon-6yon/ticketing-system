import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateLocationDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        name: 'location name',
        description: "location name is required",
        type: String,
        example: 'Dhaka',
      })
    name: string;
}

export class UpdateLocationDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        name: 'location name',
        description: "location name is required",
        type: String,
        example: 'Benapol',
      })
    name: string;
}
