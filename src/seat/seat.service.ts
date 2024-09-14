import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Seat } from 'src/models/seat.model';
import { Repository } from 'typeorm';
import { CreateSeatDto, UpdateSeatDto } from './dto/seat.dto';


@Injectable()
export class SeatService {
  constructor(
    @InjectRepository(Seat)
    private readonly seatRepository: Repository<Seat>,
  ) {}

  async create(createSeatDto: CreateSeatDto): Promise<Seat> {
    const seat = this.seatRepository.create(createSeatDto);
    await this.seatRepository.save(seat);
    return seat;
  }

  async update(id: number, updateSeatDto: UpdateSeatDto): Promise<Seat> {
    await this.seatRepository.update(id, updateSeatDto);
    return this.seatRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.seatRepository.delete(id);
  }

  async findOne(id: number): Promise<Seat> {
    return this.seatRepository.findOne({ where: { id } });
  }
}