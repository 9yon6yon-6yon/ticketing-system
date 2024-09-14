import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Location } from 'src/models/location.model';
import { Repository } from 'typeorm';
import { CreateLocationDto, UpdateLocationDto } from './dto/location.dto';

@Injectable()
export class LocationService {
  constructor(
    @InjectRepository(Location)
    private readonly locationRepository: Repository<Location>,
  ) {}

  async create(createLocationDto: CreateLocationDto): Promise<Location> {
    const location = this.locationRepository.create(createLocationDto);
    await this.locationRepository.save(location);
    return location;
  }

  async update(id: number, updateLocationDto: UpdateLocationDto): Promise<Location> {
    await this.locationRepository.update(id, updateLocationDto);
    return this.locationRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.locationRepository.delete(id);
  }

  async findOne(id: number): Promise<Location> {
    return this.locationRepository.findOne({ where: { id } });
  }
}