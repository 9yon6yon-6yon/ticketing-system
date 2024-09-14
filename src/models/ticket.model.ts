import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './user.model';
import { Bus } from './bus.model';
import { Seat } from './seat.model';
import { Train } from './train.model';


@Entity('tickets')
export class Ticket {
    @PrimaryGeneratedColumn('increment', { name: 'id' })
    readonly id?: number;

    @ManyToOne(() => User, (user) => user.tickets, { nullable: true })
    user: User;

    @ManyToOne(() => Bus, (bus) => bus.tickets, { nullable: true })
    bus: Bus;

    @ManyToOne(() => Train, (train) => train.tickets, { nullable: true })
    train: Train;

    @ManyToOne(() => Seat, (seat) => seat.tickets)
    seat: Seat;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    price: number;

    @Column({ type: 'varchar', length: 50 })
    status: string;

    @Column({ type: 'varchar', length: 50, nullable: true })
    payment_method: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    booking_time: Date;

    @Column({ type: 'varchar', length: 100, nullable: true })
    guest_name: string;

    @Column({ type: 'varchar', length: 150, nullable: true })
    guest_email: string;

    @Column({ type: 'varchar', length: 15, nullable: true })
    guest_phone: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    updated_at: Date;
}
