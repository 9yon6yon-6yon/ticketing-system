import { Controller, Post, Body, Put, Param, Delete, Get } from '@nestjs/common';
import { TrainService } from './train.service';
import { Train } from 'src/models/train.model';
import { CreateTrainDto, UpdateTrainDto } from './dto/train.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
@ApiTags('Train API')
@Controller('trains')
export class TrainController {
  constructor(private readonly trainService: TrainService) {}


  @ApiOperation({ summary: 'Create a new Train (Admin only)' })
  @ApiResponse({ status: 201, description: 'Train successfully created.' })
  @ApiResponse({ status: 403, description: 'Forbidden: Only accessible by admin users.' })
  @Post()
  async create(@Body() createTrainDto: CreateTrainDto): Promise<Train> {
    return this.trainService.create(createTrainDto);
  }

  @ApiOperation({ summary: 'Update a Train by ID (Admin only)' })
  @ApiResponse({ status: 200, description: 'Train successfully updated.' })
  @ApiResponse({ status: 404, description: 'Train not found.' })
  @Put(':id')
  async update(@Param('id') id: number, @Body() updateTrainDto: UpdateTrainDto): Promise<Train> {
    return this.trainService.update(id, updateTrainDto);
  }

  @ApiOperation({ summary: 'Delete a Train by ID (Admin only)' })
  @ApiResponse({ status: 200, description: 'Train successfully deleted.' })
  @ApiResponse({ status: 404, description: 'Train not found.' })
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.trainService.remove(id);
  }
  @ApiOperation({ summary: 'Get a Train by ID' })
  @ApiResponse({ status: 200, description: 'Train data retrieved successfully.' })
  @ApiResponse({ status: 404, description: 'Train not found.' })
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Train> {
    return this.trainService.findOne(id);
  }
  @ApiOperation({ summary: 'Get  Traines' })
  @ApiResponse({ status: 200, description: 'Train data retrieved successfully.' })
  @ApiResponse({ status: 404, description: 'Train not found.' })
  @Get()
  async loadAll(): Promise<Train[]> {
    return this.trainService.findAll();
  }
}