import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Bus } from 'src/models/bus.model';
import { Repository } from 'typeorm';
import { CreateBusDto, UpdateBusDto } from './dto/bus.dto';


@Injectable()
export class BusService {
  constructor(
    @InjectRepository(Bus)
    private readonly busRepository: Repository<Bus>,
  ) {}

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
    const buses = await this.busRepository.find();
    if (buses.length === 0) {
      throw new NotFoundException('No buses found in the database.');
    }
    return buses;
  }
}