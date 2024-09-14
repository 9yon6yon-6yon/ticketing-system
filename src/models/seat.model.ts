import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Bus } from './bus.model';
import { Ticket } from './ticket.model';
import { Train } from './train.model';

@Entity('seats')
export class Seat {
    @PrimaryGeneratedColumn('increment', { name: 'id' })
    readonly id?: number;
    @ManyToOne(() => Bus, (bus) => bus.seats, { nullable: true })
    bus: Bus;

    @ManyToOne(() => Train, (train) => train.seats, { nullable: true })
    train: Train;

    @Column({ type: 'varchar', length: 10 })
    seat_number: string;

    @Column({ type: 'boolean', default: true })
    is_available: boolean;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    updated_at: Date;

    @OneToMany(() => Ticket, (ticket) => ticket.seat)
    tickets: Ticket[];
}
