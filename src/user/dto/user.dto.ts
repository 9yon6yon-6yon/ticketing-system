import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, IsOptional, IsNotEmpty } from 'class-validator';

export class CreateUserDto {

  @IsString()
  @IsNotEmpty() 
  @ApiProperty({
    name: 'name',
    description: "Users name required",
    type: String,
    example: 'Jon Doe',
  })

  readonly name: string;

  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({
    name: 'email',
    description: 'user\'s email address',
    type: String,
    example: 'johndoe@gmail.com',
  })

  readonly email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    name: 'password',
    description: "User's password",
    type: String,
    example: 'password1234',
  })

  readonly password: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    name: 'phone',
    description: "User's phone number || optional",
    type: String,
    example: '+880183xxxxxxx',
  })

  readonly phone?: string;
}
export class UpdateUserDto {
  @IsString()
  @IsOptional()
  @ApiProperty({
    name: 'name',
    description: "Users name optional",
    type: String,
    example: 'Jon Doe',
  })
  readonly name?: string;

  @IsEmail()
  @IsOptional()
  @ApiProperty({
    name: 'email',
    description: "Users email required",
    type: String,
    example: 'Jondoe@gmail.com',
  })
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    name: 'password',
    description: "Users password required",
    type: String,
    example: 'strong password',
  })
  readonly password: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    name: 'phone',
    description: "Users phone number optional",
    type: String,
    example: '+880198xxxxxx',
  })
  readonly phone?: string;
}
export class loginUserDTO{

  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({
    name: 'email',
    description: "Users email address required",
    type: String,
    example: 'Jon johndoe@gmail.com',
  })
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    name: 'password',
    description: "Users password required",
    type: String,
    example: 'Strongpassword',
  })
  readonly password: string;
}
