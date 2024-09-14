import { Module } from '@nestjs/common';
import { BusController } from './bus.controller';
import { BusService } from './bus.service';
import { Bus } from 'src/models/bus.model';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Bus])],
  controllers: [BusController],
  providers: [BusService]
})
export class BusModule {}
