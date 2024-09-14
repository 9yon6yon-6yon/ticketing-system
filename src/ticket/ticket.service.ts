import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Ticket } from 'src/models/ticket.model';
import { Repository } from 'typeorm';
import { CreateTicketDto } from './dto/ticket.dto';


@Injectable()
export class TicketService {
  constructor(
    @InjectRepository(Ticket)
    private readonly ticketRepository: Repository<Ticket>,
  ) {}

  async createTicket(createTicketDto: CreateTicketDto): Promise<Ticket> {
    const ticket = this.ticketRepository.create(createTicketDto);
    await this.ticketRepository.save(ticket);
    return ticket;
  }

  // Additional methods for updating and querying tickets
}