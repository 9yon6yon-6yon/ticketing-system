import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TicketController } from './ticket.controller';
import { TicketService } from './ticket.service';
import { Ticket } from 'src/models/ticket.model';


@Module({
    imports: [TypeOrmModule.forFeature([Ticket])],
    providers: [TicketService],
    controllers: [TicketController],
    exports: [TicketService]
  })
export class TicketModule {}
