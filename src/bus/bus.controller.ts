import { Controller, Post, Body, Put, Param, Delete, Get } from '@nestjs/common';
import { BusService } from './bus.service';
import { CreateBusDto, UpdateBusDto } from './dto/bus.dto';
import { Bus } from 'src/models/bus.model';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';


@Controller('buses')
export class BusController {
  constructor(private readonly busService: BusService) { }


  @ApiOperation({ summary: 'Create a new Bus (Admin only)' })
  @ApiResponse({ status: 201, description: 'Bus successfully created.' })
  @ApiResponse({ status: 403, description: 'Forbidden: Only accessible by admin users.' })
  @Post()
  async create(@Body() createBusDto: CreateBusDto): Promise<Bus> {
    return this.busService.create(createBusDto);
  }

  @ApiOperation({ summary: 'Update a Bus by ID (Admin only)' })
  @ApiResponse({ status: 200, description: 'Bus successfully updated.' })
  @ApiResponse({ status: 404, description: 'Bus not found.' })
  @Put(':id')
  async update(@Param('id') id: number, @Body() updateBusDto: UpdateBusDto): Promise<Bus> {
    return this.busService.update(id, updateBusDto);
  }

  @ApiOperation({ summary: 'Delete a Bus by ID (Admin only)' })
  @ApiResponse({ status: 200, description: 'Bus successfully deleted.' })
  @ApiResponse({ status: 404, description: 'Bus not found.' })
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.busService.remove(id);
  }
  @ApiOperation({ summary: 'Get a Bus by ID' })
  @ApiResponse({ status: 200, description: 'Bus data retrieved successfully.' })
  @ApiResponse({ status: 404, description: 'Bus not found.' })
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Bus> {
    return this.busService.findOne(id);
  }
  @ApiOperation({ summary: 'Get  Buses' })
  @ApiResponse({ status: 200, description: 'Bus data retrieved successfully.' })
  @ApiResponse({ status: 404, description: 'Bus not found.' })
  @Get()
  async loadAll(): Promise<Bus[]> {
    return this.busService.findAll();
  }
}