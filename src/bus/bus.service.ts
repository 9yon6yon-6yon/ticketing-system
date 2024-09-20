import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Bus } from 'src/models/bus.model';
import { Between, DeepPartial, Repository } from 'typeorm';
import { CreateBusDto, UpdateBusDto } from './dto/bus.dto';


@Injectable()
export class BusService {
  constructor(
    @InjectRepository(Bus)
    private readonly busRepository: Repository<Bus>,
  ) { }

  async create(createBusDto: CreateBusDto): Promise<Bus> {
    const bus = this.busRepository.create(createBusDto);
    await this.busRepository.save(bus);
    return bus;
  }

  async update(id: number, updateBusDto: UpdateBusDto): Promise<Bus> {
    await this.busRepository.update(id, updateBusDto);
    return this.busRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.busRepository.delete(id);
  }

  async findOne(id: number): Promise<Bus> {
    return this.busRepository.findOne({ where: { id } });
  }

  async findAll(): Promise<Bus[]> {
    const buses = await this.busRepository.find({
      relations: ['from_location', 'to_location'],
      order: {departure_time: 'ASC'},
    });
    if (buses.length === 0) {
      throw new NotFoundException('No buses found in the database.');
    }
    return buses;
  }
  async searchBuses({ from, to, date }: { from: number; to: number; date: string }): Promise<Bus[]> {
    const searchDate = new Date(date);
    searchDate.setHours(0, 0, 0, 0); // Set to start of the day

    const nextDay = new Date(date);
    nextDay.setHours(23, 59, 59, 999); // Set to end of the day


    const buses = await this.busRepository.find({
      where: {
        from_location: { id: from },
        to_location: { id: to },
        departure_time: Between(searchDate, nextDay),
      },
      relations: ['from_location', 'to_location'],
    });
    console.log(from, to, searchDate, nextDay);
    return buses;
  }
}