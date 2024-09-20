import { Injectable, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { Payment } from 'src/models/payment.model';
import { Ticket } from 'src/models/ticket.model';
import { User } from 'src/models/user.model';
import Stripe from 'stripe';
import { Repository } from 'typeorm';
import { CreatePaymentDto } from './dto/payment.dto';

@Injectable()
export class PaymentService {
  private stripe: Stripe;
  constructor(
    @InjectRepository(Payment)
    private paymentRepository: Repository<Payment>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Ticket)
    private ticketRepository: Repository<Ticket>,
    private configService: ConfigService,
  ) {
    this.stripe = new Stripe(this.configService.get<string>('STRIPE_SECRET_KEY'));
  }
  async createPayment(createPaymentDto: CreatePaymentDto): Promise<Payment> {
    const ticket = await this.ticketRepository.findOne({ where: { id: createPaymentDto.ticketId }, relations: ['user', 'seat'] });
    if (!ticket) {
      throw new NotFoundException('Ticket not found');
    }

    // Create Stripe Payment Intent
    const paymentIntent = await this.stripe.paymentIntents.create({
      amount: Math.round(createPaymentDto.amount * 100),
      currency: createPaymentDto.currency,
      payment_method: createPaymentDto.stripePaymentId,
      confirm: true,
      return_url: 'http://localhost:3000/payment/history/1',
    });

    const payment = this.paymentRepository.create({
      stripePaymentId: paymentIntent.id,
      amount: createPaymentDto.amount,
      currency: createPaymentDto.currency,
      status: paymentIntent.status,
      userId: createPaymentDto.userId,
      ticketId: createPaymentDto.ticketId,
    });


    return await this.paymentRepository.save(payment);
  }
  async getPaymentHistory(userId: number): Promise<Payment[]> {
    return this.paymentRepository.find({
      where: { user: { id: userId } },
      relations: ['ticket', 'user'],
      order: { created_at: 'DESC' },
    });
  }

}
