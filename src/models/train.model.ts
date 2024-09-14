import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Seat } from './seat.model';
import { Ticket } from './ticket.model';

@Entity('trains')
export class Train {
    @PrimaryGeneratedColumn('increment', { name: 'id' })
    readonly id?: number;

    @Column({ type: 'varchar', length: 100 })
    train_name: string;

    @Column({ type: 'varchar', length: 50 })
    type: string; // e.g., Express, Local

    @Column({ type: 'timestamp' })
    departure_time: Date;

    @Column({ type: 'timestamp' })
    arrival_time: Date;

    @Column({ type: 'int' })
    from_location: number; // Foreign key to locations table

    @Column({ type: 'int' })
    to_location: number; // Foreign key to locations table

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    updated_at: Date;

    @OneToMany(() => Seat, (seat) => seat.train)
    seats: Seat[];

    @OneToMany(() => Ticket, (ticket) => ticket.train)
    tickets: Ticket[];
}
