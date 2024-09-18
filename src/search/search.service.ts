import { Injectable } from '@nestjs/common';
import { BusService } from 'src/bus/bus.service';
import { TrainService } from 'src/train/train.service';
import { SearchDto } from './dto/search.dto';


@Injectable()
export class SearchService {
    constructor(
        private readonly busService: BusService,
        private readonly trainService: TrainService,
    ) { }

    async search(searchParams: SearchDto) {
        const { from, to, date } = searchParams;
    
        const buses = await this.busService.searchBuses({ from, to, date });
        const trains = await this.trainService.searchTrains({ from, to, date });
    
        return {
          buses,
          // trains,
        };
      }
}