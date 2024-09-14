import { Controller, Post, Body, Put, Param, Delete, Get } from '@nestjs/common';
import { BusService } from './bus.service';
import { CreateBusDto, UpdateBusDto } from './dto/bus.dto';
import { Bus } from 'src/models/bus.model';


@Controller('buses')
export class BusController {
  constructor(private readonly busService: BusService) {}

  @Post()
  async create(@Body() createBusDto: CreateBusDto): Promise<Bus> {
    return this.busService.create(createBusDto);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateBusDto: UpdateBusDto): Promise<Bus> {
    return this.busService.update(id, updateBusDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.busService.remove(id);
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Bus> {
    return this.busService.findOne(id);
  }
}