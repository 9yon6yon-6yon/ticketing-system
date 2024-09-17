import { Controller, Post, Body, Put, Param, Delete, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, loginUserDTO, UpdateUserDto } from './dto/user.dto';
import { User } from 'src/models/user.model';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('User API')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @ApiOperation({ summary: 'Create a new user' })
  @ApiResponse({ status: 201, description: 'The user has been successfully created', type: User })
  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userService.create(createUserDto);
  }
  @ApiOperation({ summary: 'Get a user by ID and update' })
  @ApiResponse({ status: 200, description: 'Update the user with the specified ID', type: User })
  @ApiResponse({ status: 400, description: 'Can\'t update user or bad request' })
  @Put(':id')
  async update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto): Promise<User> {
    return this.userService.update(id, updateUserDto);
  }
  @ApiOperation({ summary: 'Get a user by ID and delete' })
  @ApiResponse({ status: 200, description: 'Delete the user with the specified ID', type: User })
  @ApiResponse({ status: 400, description: 'Can\'t delete user or bad request' })
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.userService.remove(id);
  }
  @ApiOperation({ summary: 'Get a user by ID' })
  @ApiResponse({ status: 200, description: 'Found user with the specified ID', type: User })
  @ApiResponse({ status: 404, description: 'Can\'t find user. No user data found' })
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<User> {
    return this.userService.findOne(id);
  }

  @ApiOperation({ summary: 'User login' })
  @ApiResponse({ status: 200, description: 'Login successful.', type: String })
  @ApiResponse({ status: 401, description: 'Invalid credentials' })
  @Post('login')
  userLogin(@Body() loginDTO: loginUserDTO): Promise<boolean> {
    return this.userService.logInUser(loginDTO);
  }
}
