import { Controller, Post, Body, Put, Param, Delete, Get } from '@nestjs/common';
import { TrainService } from './train.service';
import { Train } from 'src/models/train.model';
import { CreateTrainDto, UpdateTrainDto } from './dto/train.dto';

@Controller('trains')
export class TrainController {
  constructor(private readonly trainService: TrainService) {}

  @Post()
  async create(@Body() createTrainDto: CreateTrainDto): Promise<Train> {
    return this.trainService.create(createTrainDto);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateTrainDto: UpdateTrainDto): Promise<Train> {
    return this.trainService.update(id, updateTrainDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.trainService.remove(id);
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Train> {
    return this.trainService.findOne(id);
  }
}