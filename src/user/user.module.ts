import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/models/user.model';
import { TicketModule } from 'src/ticket/ticket.module';


@Module({
  imports: [
    TypeOrmModule.forFeature([User]), // Only include the entities here
    TicketModule, // Import TicketModule here
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService], // Export UserService if it will be used in other modules
})
export class UserModule {}
