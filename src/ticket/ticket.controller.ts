import { Body, Controller, Post } from '@nestjs/common';
import { TicketService } from './ticket.service';
import { CreateTicketDto } from './dto/ticket.dto';
import { Ticket } from 'src/models/ticket.model';
import { CreatePaymentDto } from 'src/payment/dto/payment.dto';

@Controller('ticket')
export class TicketController {
    constructor(private readonly ticketService: TicketService) { }


    @Post('create')
    async createTicket(
      @Body() createTicketDto: CreateTicketDto,
      @Body() createPaymentDto: CreatePaymentDto,
    ): Promise<any> {
      return this.ticketService.createTicket(createTicketDto, createPaymentDto);
    }
}
