import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Train } from 'src/models/train.model';
import { Repository } from 'typeorm';
import { CreateTrainDto, UpdateTrainDto } from './dto/train.dto';

@Injectable()
export class TrainService {
  constructor(
    @InjectRepository(Train)
    private readonly trainRepository: Repository<Train>,
  ) {}

  async create(createTrainDto: CreateTrainDto): Promise<Train> {
    const train = this.trainRepository.create(createTrainDto);
    await this.trainRepository.save(train);
    return train;
  }

  async update(id: number, updateTrainDto: UpdateTrainDto): Promise<Train> {
    await this.trainRepository.update(id, updateTrainDto);
    return this.trainRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.trainRepository.delete(id);
  }

  async findOne(id: number): Promise<Train> {
    return this.trainRepository.findOne({ where: { id } });
  }
}