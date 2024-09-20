import { Module } from '@nestjs/common';
import { SeatController } from './seat.controller';
import { SeatService } from './seat.service';
import { Seat } from 'src/models/seat.model';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bus } from 'src/models/bus.model';
import { Train } from 'src/models/train.model';

@Module({
  imports: [TypeOrmModule.forFeature([Seat,Bus,Train])],
  controllers: [SeatController],
  providers: [SeatService],
  exports: [SeatService]
})
export class SeatModule {}
