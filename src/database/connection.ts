import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Bus } from 'src/models/bus.model';
import { Location } from 'src/models/location.model';
import { Payment } from 'src/models/payment.model';
import { Seat } from 'src/models/seat.model';
import { Ticket } from 'src/models/ticket.model';
import { Train } from 'src/models/train.model';
import { User } from 'src/models/user.model';

// export default (configService: ConfigService): TypeOrmModuleOptions => {
//   const db_URI = configService.get<string>('DB_URI');
//   const options: TypeOrmModuleOptions = {
//     type: 'postgres',
//     host: configService.get('DB_HOST'),
//     port: configService.get<number>('DB_PORT'), //+ is to convert it to a number
//     username: configService.get('DB_USER'),
//     password: configService.get('DB_PASSWORD'),
//     database: configService.get('DB_DATABASE'),
//     ssl: { rejectUnauthorized: false },
//     entities: [User, Bus, Train, Ticket, Seat, Location, Payment],
//     synchronize: true,
//   };
//   return options;
// };
export default (configService: ConfigService): TypeOrmModuleOptions => {
  const dbURI = configService.get<string>('DB_URI');
  console.log('DB_URI:', configService.get('DB_URI'));
  if (dbURI) {
    return {
      type: 'postgres',
      url: dbURI,
      ssl: {
        rejectUnauthorized: false,
      },
      entities: [User, Bus, Train, Ticket, Seat, Location, Payment],
      synchronize: false, 
    };
  }

  return {
    type: 'postgres',
    host: configService.get('DB_HOST'),
    port: Number(configService.get<number>('DB_PORT')),
    username: configService.get('DB_USER'),
    password: configService.get('DB_PASSWORD'),
    database: configService.get('DB_DATABASE'),
    ssl: false,
    entities: [User, Bus, Train, Ticket, Seat, Location, Payment],
    synchronize: true,
  };
};
