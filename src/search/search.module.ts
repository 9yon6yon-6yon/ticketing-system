import { Module } from '@nestjs/common';
import { SearchController } from './search.controller';
import { SearchService } from './search.service';
import { BusModule } from 'src/bus/bus.module';
import { TrainModule } from 'src/train/train.module';

@Module({
  imports: [BusModule, TrainModule],
  controllers: [SearchController],
  providers: [SearchService],
})
export class SearchModule {}
