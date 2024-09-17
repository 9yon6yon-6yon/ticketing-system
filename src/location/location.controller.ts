import { Controller, Post, Body, Put, Param, Delete, Get, UseGuards } from '@nestjs/common';

import { CreateLocationDto, UpdateLocationDto } from './dto/location.dto';
import { LocationService } from './location.service';
import { Location } from 'src/models/location.model';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
@ApiTags('Location API')
@Controller()
export class LocationController {
  constructor(private readonly locationService: LocationService) {}
  
  @ApiOperation({ summary: 'Create a new location (Admin only)' })
  @ApiResponse({ status: 201, description: 'Location successfully created.' })
  @ApiResponse({ status: 403, description: 'Forbidden: Only accessible by admin users.' })
  @Post('/admin/location/add')
  async create(@Body() createLocationDto: CreateLocationDto): Promise<Location> {
    return this.locationService.create(createLocationDto);
  }

  @ApiOperation({ summary: 'Update a location by ID (Admin only)' })
  @ApiResponse({ status: 200, description: 'Location successfully updated.' })
  @ApiResponse({ status: 404, description: 'Location not found.' })
  @Put('/admin/location/:id/update')
  async update(@Param('id') id: number, @Body() updateLocationDto: UpdateLocationDto): Promise<Location> {
    return this.locationService.update(id, updateLocationDto);
  }

  @ApiOperation({ summary: 'Delete a location by ID (Admin only)' })
  @ApiResponse({ status: 200, description: 'Location successfully deleted.' })
  @ApiResponse({ status: 404, description: 'Location not found.' })
  @Delete('/admin/location/:id/delete')
  async delete(@Param('id') id: number): Promise<{ message: string }> {
    return this.locationService.remove(id);
  }
  @ApiOperation({ summary: 'Get a location by ID' })
  @ApiResponse({ status: 200, description: 'Location data retrieved successfully.' })
  @ApiResponse({ status: 404, description: 'Location not found.' })
  @Get('/location/:id')
  async findOne(@Param('id') id: number): Promise<Location> {
    return this.locationService.findOne(id);
  }

  @ApiOperation({ summary: 'Get a locations' })
  @ApiResponse({ status: 200, description: 'Location data retrieved successfully.' })
  @ApiResponse({ status: 404, description: 'Location not found.' })
  @Get('/locations/')
  async findAll(): Promise<Location[]> {
    return this.locationService.findAll();
  }
}