import { Module } from '@nestjs/common';
import { TrainController } from './train.controller';
import { TrainService } from './train.service';
import { Train } from 'src/models/train.model';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Train])],
  controllers: [TrainController],
  providers: [TrainService]
})
export class TrainModule {}
