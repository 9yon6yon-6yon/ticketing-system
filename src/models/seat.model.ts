import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, JoinColumn } from 'typeorm';
import { Bus } from './bus.model';
import { Ticket } from './ticket.model';
import { Train } from './train.model';

@Entity('seats')
export class Seat {
    @PrimaryGeneratedColumn('increment', { name: 'id' })
    readonly id?: number;

    @Column({ name: 'bus_id', nullable: true })
    busId: number;

    @ManyToOne(() => Bus, (bus) => bus.seats, { nullable: true })
    @JoinColumn({ name: 'bus_id' })
    readonly bus: Bus;

    @Column({ name: 'train_id', nullable: true })
    trainId: number;

    @ManyToOne(() => Train, (train) => train.seats, { nullable: true })
    @JoinColumn({ name: 'train_id' })
    readonly train: Train;

    @Column({ type: 'varchar', length: 10 })
    readonly seat_number: string;

    @Column({ type: 'boolean', default: true })
    is_available: boolean;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    readonly created_at: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    readonly updated_at: Date;

    @OneToOne(() => Ticket, (ticket) => ticket.seat, { eager: true, cascade: true })
    readonly tickets: Ticket[];
}
