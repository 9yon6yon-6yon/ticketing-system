import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { User } from './user.model';
import { Bus } from './bus.model';
import { Seat } from './seat.model';
import { Train } from './train.model';


@Entity('tickets')
export class Ticket {
    @PrimaryGeneratedColumn('increment', { name: 'id' })
    readonly id?: number;

    @Column({name: 'user_id'})
    userId: number;

    @ManyToOne(() => User, (user) => user.tickets, { nullable: true })
    @JoinColumn({ name: 'user_id' })
    user: User;

    @Column({name: 'seat_id'})
    seatid: number;

    @ManyToOne(() => Seat, (seat) => seat.tickets)
    @JoinColumn({ name: 'seat_id' })
    seat: Seat;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    price: number;

    @Column({ type: 'varchar', length: 50 })
    status: string;

    @Column({ type: 'varchar', length: 50, nullable: true })
    payment_method: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    booking_time: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    updated_at: Date;
}
