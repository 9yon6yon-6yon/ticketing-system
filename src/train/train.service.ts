import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Train } from 'src/models/train.model';
import { Between, Repository } from 'typeorm';
import { CreateTrainDto, UpdateTrainDto } from './dto/train.dto';
import { SearchDto } from 'src/search/dto/search.dto';

@Injectable()
export class TrainService {
  constructor(
    @InjectRepository(Train)
    private readonly trainRepository: Repository<Train>,
  ) { }

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
  async findAll(): Promise<Train[]> {
    const trains = await this.trainRepository.find({
      relations: ['from_location', 'to_location'],
    });
    if (trains.length === 0) {
      throw new NotFoundException('No trains found in the database.');
    }
    return trains;
  }
  async searchTrains(searchParams: SearchDto) {
    const { from, to, date } = searchParams;
    const searchDate = new Date(date);
    searchDate.setHours(0, 0, 0, 0); // Set to start of the day

    const nextDay = new Date(date);
    nextDay.setHours(23, 59, 59, 999); // Set to end of the day

    return this.trainRepository.find({
      where: {
        from_location: { id: from },
        to_location: { id: to },
        departure_time: Between(searchDate, nextDay),

      },
      relations: ['from_location', 'to_location'],
    });
  }
}