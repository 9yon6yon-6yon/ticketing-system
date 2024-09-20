import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TicketController } from './ticket.controller';
import { TicketService } from './ticket.service';
import { Ticket } from 'src/models/ticket.model';
import { Seat } from 'src/models/seat.model';
import { SeatModule } from 'src/seat/seat.module';
import { User } from 'src/models/user.model';
import { Payment } from 'src/models/payment.model';
import { PaymentModule } from 'src/payment/payment.module';


@Module({
  imports: [TypeOrmModule.forFeature([Ticket, Seat, User]), PaymentModule],
  providers: [TicketService],
  controllers: [TicketController],
  exports: [TicketService]
})
export class TicketModule { }
