import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Seat } from 'src/models/seat.model';
import { Repository } from 'typeorm';
import { CreateSeatDto, UpdateSeatDto } from './dto/seat.dto';
import { Bus } from 'src/models/bus.model';
import { Train } from 'src/models/train.model';


@Injectable()
export class SeatService {
  constructor(
    @InjectRepository(Seat)
    private readonly seatRepository: Repository<Seat>,
    @InjectRepository(Bus)
    private readonly busRepository: Repository<Bus>,
    @InjectRepository(Train)
    private readonly trainRepository: Repository<Train>,
  ) { }

  async create(createSeatDto: CreateSeatDto): Promise<Seat> {
    const seat = this.seatRepository.create(createSeatDto);

    if (createSeatDto.busId) {
      const bus = await this.busRepository.findOne({ where: { id: createSeatDto.busId } });
      if (!bus) throw new NotFoundException(`Bus with ID ${createSeatDto.busId} not found`);
    }

    if (createSeatDto.trainId) {
      const train = await this.trainRepository.findOne({ where: { id: createSeatDto.trainId } });
      if (!train) throw new NotFoundException(`Train with ID ${createSeatDto.trainId} not found`);
    }

    return await this.seatRepository.save(seat);
  }


  async update(id: number, updateSeatDto: UpdateSeatDto): Promise<Seat> {
    await this.seatRepository.update(id, updateSeatDto);
    return this.seatRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.seatRepository.delete(id);
  }

  async findOne(id: number): Promise<Seat> {
    const seat = await this.seatRepository.findOne({ where: { id }, relations: ['bus', 'train'] });
    if (!seat) {
      throw new NotFoundException(`Seat with id ${id} not found`);
    }
    return seat;
  }

  async updateSeat(id: number, updateSeatDto: UpdateSeatDto): Promise<Seat> {
    const seat = await this.seatRepository.findOne({ where: { id } });
    if (!seat) throw new NotFoundException(`Seat with ID ${id} not found`);

    Object.assign(seat, updateSeatDto);
    return await this.seatRepository.save(seat);
  }

  // Add multiple seats based on configuration
  async addMultipleSeats(busId: number, totalSeats: number, configuration: string): Promise<Seat[]> {
    const bus = await this.busRepository.findOne({ where: { id: busId } });
    if (!bus) throw new NotFoundException(`Bus with ID ${busId} not found`);

    const seatNumbers = this.generateSeats(configuration, totalSeats);

    const seats = seatNumbers.map((seat_number) => {
      const seat = this.seatRepository.create({
        busId,
        seat_number,
        is_available: true,
      });
      return seat;
    });

    return await this.seatRepository.save(seats);
  }

  // Helper to generate seats based on configuration like '2-2', '1-3', etc.
  generateSeats(configuration: string, totalSeats: number): string[] {
    const seatArrangement = [];
    const [col1, col2] = configuration.split('-').map(Number);

    let seatCounter = 1;
    while (seatCounter <= totalSeats) {
      for (let i = 1; i <= col1 && seatCounter <= totalSeats; i++) {
        seatArrangement.push(`A${seatCounter++}`);
      }
      for (let i = 1; i <= col2 && seatCounter <= totalSeats; i++) {
        seatArrangement.push(`B${seatCounter++}`);
      }
    }
    return seatArrangement;
  }

  // Fetch all seats for a bus or train
  async findSeatsByBus(busId: number): Promise<Seat[]> {
    const seats = await this.seatRepository.find({ where: { busId } });
    if (seats.length === 0) throw new NotFoundException(`No seats found for Bus ID ${busId}`);
    return seats;
  }

  async findSeatsByTrain(trainId: number): Promise<Seat[]> {
    const seats = await this.seatRepository.find({ where: { trainId } });
    if (seats.length === 0) throw new NotFoundException(`No seats found for Train ID ${trainId}`);
    return seats;
  }
}