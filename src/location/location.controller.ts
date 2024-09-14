import { Controller, Post, Body, Put, Param, Delete, Get } from '@nestjs/common';

import { CreateLocationDto, UpdateLocationDto } from './dto/location.dto';
import { LocationService } from './location.service';
import { Location } from 'src/models/location.model';

@Controller('locations')
export class LocationController {
  constructor(private readonly locationService: LocationService) {}

  @Post()
  async create(@Body() createLocationDto: CreateLocationDto): Promise<Location> {
    return this.locationService.create(createLocationDto);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateLocationDto: UpdateLocationDto): Promise<Location> {
    return this.locationService.update(id, updateLocationDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.locationService.remove(id);
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Location> {
    return this.locationService.findOne(id);
  }
}