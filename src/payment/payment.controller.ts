import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Payment } from 'src/models/payment.model';
import { CreatePaymentDto } from './dto/payment.dto';
import { PaymentService } from './payment.service';

@Controller('payment')
export class PaymentController {
        constructor(private readonly paymentService: PaymentService) { }

    @Post('create')
    async createPayment(@Body() createPaymentDto: CreatePaymentDto): Promise<Payment> {
        return this.paymentService.createPayment(createPaymentDto);
    }
    @Get('history/:userId')
    async getPaymentHistory(@Param('userId') userId: number) {
      return this.paymentService.getPaymentHistory(userId);
    }
}
