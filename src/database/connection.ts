import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Bus } from "src/models/bus.model";
import { Location } from "src/models/location.model";
import { Payment } from "src/models/payment.model";
import { Seat } from "src/models/seat.model";
import { Ticket } from "src/models/ticket.model";
import { Train } from "src/models/train.model";
import { User } from "src/models/user.model";


export default (configService: ConfigService): TypeOrmModuleOptions => {
  const options: TypeOrmModuleOptions = {
    type: 'postgres',
    host: configService.get('DB_HOST'),
    port: +configService.get<number>('DB_PORT'),//+ is to convert it to a number otherwise string as default
    username: configService.get('DB_USER'),
    password: configService.get('DB_PASSWORD'),
    database: configService.get('DB_DATABASE'),
    entities: [User,Bus,Train,Ticket,Seat,Location,Payment],
    synchronize: true,

  }
  return options;
}
