import { Controller, Post, Body, Put, Param, Delete, Get } from '@nestjs/common';
import { SeatService } from './seat.service';
import { Seat } from 'src/models/seat.model';
import { CreateSeatDto, UpdateSeatDto } from './dto/seat.dto';


@Controller()
export class SeatController {
  constructor(private readonly seatService: SeatService) {}

  @Post('admin/seats')
  async create(@Body() createSeatDto: CreateSeatDto): Promise<Seat> {
    return this.seatService.create(createSeatDto);
  }

  @Put('admin/seats/update/:id')
  async update(@Param('id') id: number, @Body() updateSeatDto: UpdateSeatDto): Promise<Seat> {
    return this.seatService.update(id, updateSeatDto);
  }

  @Delete('admin/seats/delete/:id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.seatService.remove(id);
  }

  @Get('seats/:id')
  async findOne(@Param('id') id: number): Promise<Seat> {
    return this.seatService.findOne(id);
  }
  @Get('seats/bus/:busId')
  async findSeatsByBus(@Param('busId') busId: number): Promise<Seat[]> {
    return this.seatService.findSeatsByBus(busId);
  }

  // Find seats by train ID
  @Get('seats/train/:trainId')
  async findSeatsByTrain(@Param('trainId') trainId: number): Promise<Seat[]> {
    return this.seatService.findSeatsByTrain(trainId);
  }
   // Update a seat
   @Put('admin/seats/update-config/:id')
   async updateSeat(@Param('id') id: number, @Body() updateSeatDto: UpdateSeatDto): Promise<Seat> {
     return this.seatService.updateSeat(id, updateSeatDto);
   }
 
   // Add multiple seats for a bus
   @Post('admin/seats/bus/add-seats/:busId')
   async addMultipleSeats(
     @Param('busId') busId: number,
     @Body('totalSeats') totalSeats: number,
     @Body('configuration') configuration: string,
   ): Promise<Seat[]> {
     return this.seatService.addMultipleSeats(busId, totalSeats, configuration);
   }
}