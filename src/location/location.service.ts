import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
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
    const existingLocation = await this.locationRepository.findOne({
      where: { name: createLocationDto.name }
    });//to check  if the location name already exists or not

    if (existingLocation) {
      throw new ConflictException('Location with this name already exists.');
    }

    const location = this.locationRepository.create(createLocationDto);
    await this.locationRepository.save(location);
    return location;
  }

  async update(id: number, updateLocationDto: UpdateLocationDto): Promise<Location> {
    const location = await this.locationRepository.findOne({ where: { id } });

    if (!location) {
      throw new NotFoundException(`Location with ID ${id} not found.`);
    }

    await this.locationRepository.update(id, updateLocationDto);//update the current location 
    return this.locationRepository.findOne({ where: { id } });//show the updated result to the user 
  }

  async remove(id: number): Promise<{ message: string }> {
    const result = await this.locationRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Location with ID ${id} not found.`);
    }

    return { message: `Location with ID ${id} has been successfully deleted.` };
  }

  async findOne(id: number): Promise<Location> {
    const location = await this.locationRepository.findOne({ where: { id } });

    if (!location) {
      throw new NotFoundException(`Location with ID ${id} not found.`);
    }

    return location;
  }

  async findAll(): Promise<Location[]> {
    const locations = await this.locationRepository.find();
    if (locations.length === 0) {
      throw new NotFoundException('No locations found in the database.');
    }
    return locations;
  }
}