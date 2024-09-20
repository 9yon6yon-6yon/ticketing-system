import { Module } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PaymentController } from './payment.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ticket } from 'src/models/ticket.model';
import { Payment } from 'src/models/payment.model';
import { UserModule } from 'src/user/user.module';
import { ConfigModule } from '@nestjs/config';
import { User } from 'src/models/user.model';


@Module({
  imports: [ConfigModule.forRoot(), TypeOrmModule.forFeature([Payment, Ticket, User]),
  ],
  providers: [PaymentService],
  controllers: [PaymentController],
  exports: [PaymentService, TypeOrmModule]
})
export class PaymentModule { }
