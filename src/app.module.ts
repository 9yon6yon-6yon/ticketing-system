import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { BusModule } from './bus/bus.module';
import { TrainModule } from './train/train.module';
import { SeatModule } from './seat/seat.module';
import { TicketService } from './ticket/ticket.service';
import { TicketController } from './ticket/ticket.controller';
import { LocationModule } from './location/location.module';
import DatabaseConnection from './database/connection';
import { TicketModule } from './ticket/ticket.module';
import { UserController } from './user/user.controller';
import { BusController } from './bus/bus.controller';
import { TrainController } from './train/train.controller';
import { SeatController } from './seat/seat.controller';
import { LocationController } from './location/location.controller';
import { UserService } from './user/user.service';
import { BusService } from './bus/bus.service';
import { TrainService } from './train/train.service';
import { SeatService } from './seat/seat.service';
import { LocationService } from './location/location.service';

@Module({
  imports: [ConfigModule.forRoot(), TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    useFactory: DatabaseConnection,
    inject: [ConfigService],
  }), UserModule, BusModule, TrainModule, SeatModule, LocationModule, TicketModule,



  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
//AppController, UserController,BusController,TrainController,SeatController,LocationController, TicketController
//AppService,UserService,BusService,TrainService,SeatService,LocationService, TicketService