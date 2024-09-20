import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Ticket } from 'src/models/ticket.model';
import { Repository } from 'typeorm';
import { CreateTicketDto } from './dto/ticket.dto';
import { User } from 'src/models/user.model';
import { Seat } from 'src/models/seat.model';
import { Payment } from 'src/models/payment.model';
import { PaymentService } from 'src/payment/payment.service';
import { Bus } from 'src/models/bus.model';
import { CreatePaymentDto } from 'src/payment/dto/payment.dto';


@Injectable()
export class TicketService {
  constructor(
    @InjectRepository(Ticket)
    private readonly ticketRepository: Repository<Ticket>,
    @InjectRepository(Seat)
    private readonly seatRepository: Repository<Seat>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Payment)
    private readonly paymentRepository: Repository<Payment>,
    private paymentService: PaymentService,
  ) { }

  async createTicket(createTicketDto: CreateTicketDto, createPaymentDto: CreatePaymentDto): Promise<any> {
    // const ticket = this.ticketRepository.create(createTicketDto);
    // await this.ticketRepository.save(ticket);
    // return ticket;
    const seat = await this.seatRepository.findOne({ where: { id: createTicketDto.seatid }, relations: ['bus'] });
    if (!seat || !seat.is_available) {
      throw new NotFoundException('Seat not available');
    }


    // Create the ticket
    const ticket = this.ticketRepository.create(createTicketDto);

    const savedTicket = await this.ticketRepository.save(ticket);


    // Mark the seat as unavailable
    seat.is_available = false;
    await this.seatRepository.save(seat);
    
    createPaymentDto.amount = Math.round(createTicketDto.price * 100); // Convert price to cents
    createPaymentDto.currency = 'usd'; // You can dynamically change this if needed
    const paymentResult = await this.paymentService.createPayment(createPaymentDto);

    // Save the payment record
    const payment = this.paymentRepository.create(paymentResult);
    await this.paymentRepository.save(payment);

    // Fetch user and bus details for response
    const user = await this.seatRepository.manager.findOne(User, { where: { id: createTicketDto.userId }, select: ['name', 'email', 'phone'] });
    const bus = await this.seatRepository.manager.findOne(Bus, { where: { id: seat.busId } });

    const response = {
      ticketId: savedTicket.id,
      userName: user.name,
      userEmail: user.email,
      userPhone: user.phone,
      busDetails: {
        departure: bus.from_location,
        arrival: bus.to_location,
        departureTime: bus.departure_time,
      },
      seatNumber: seat.seat_number,
      paymentAmount: payment.amount,
      paymentMethod: ticket.payment_method,
      ticketGeneratedAt: savedTicket.booking_time,
      status: savedTicket.status
    };

    return response;
  }
}