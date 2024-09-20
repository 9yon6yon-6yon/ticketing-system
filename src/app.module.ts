import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { BusModule } from './bus/bus.module';
import { TrainModule } from './train/train.module';
import { SeatModule } from './seat/seat.module';
import { LocationModule } from './location/location.module';
import DatabaseConnection from './database/connection';
import { TicketModule } from './ticket/ticket.module';
import { LoggerMiddleware } from './logger/logger.middleware';
import { SearchModule } from './search/search.module';
import { PaymentModule } from './payment/payment.module';
@Module({
  imports: [ConfigModule.forRoot(), TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    useFactory: DatabaseConnection,
    inject: [ConfigService],
  }), UserModule, BusModule, TrainModule, SeatModule, LocationModule, TicketModule, SearchModule, PaymentModule,



  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('/');
    //another way to apply middleware : .forRoutes({ path: '[name of the path e.g. users]', method: RequestMethod.GET/POST/PUT/DELETE etc. can use ALL });
  }
}
