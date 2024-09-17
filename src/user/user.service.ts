import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { CreateUserDto, loginUserDTO, UpdateUserDto } from './dto/user.dto';

import { TicketService } from '../ticket/ticket.service';
import { User } from 'src/models/user.model';



@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) { }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const { name, email, password, phone } = createUserDto;

    const user = this.userRepository.create(createUserDto);
    const newUser = new User(name, email, password, phone);
    await newUser.hashPassword();

    try {
      await this.userRepository.save(newUser);
      return newUser;
    } catch (error) {
      throw new BadRequestException('User with this email already exists.');
    }

  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    await this.userRepository.update(id, updateUserDto);
    return this.userRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }

  async findOne(id: number): Promise<User> {
    const user =  await this.userRepository.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException(`User with id : ${id} was not found`);
    }
    return user;
  }
  async logInUser(loginDTO: loginUserDTO): Promise<boolean> {
    const { email, password } = loginDTO;
    if (!email || !password) {
      throw new BadRequestException('Email and password must be provided');
    }
    const user = await this.userRepository.findOne({ where: { email } });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new UnauthorizedException('Invalid credentials for user email or password');
    }

    return true;
  }

}