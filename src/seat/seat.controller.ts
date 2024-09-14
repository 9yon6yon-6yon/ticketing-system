import { Controller, Post, Body, Put, Param, Delete, Get } from '@nestjs/common';
import { SeatService } from './seat.service';
import { Seat } from 'src/models/seat.model';
import { CreateSeatDto, UpdateSeatDto } from './dto/seat.dto';


@Controller('seats')
export class SeatController {
  constructor(private readonly seatService: SeatService) {}

  @Post()
  async create(@Body() createSeatDto: CreateSeatDto): Promise<Seat> {
    return this.seatService.create(createSeatDto);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateSeatDto: UpdateSeatDto): Promise<Seat> {
    return this.seatService.update(id, updateSeatDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.seatService.remove(id);
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Seat> {
    return this.seatService.findOne(id);
  }
}