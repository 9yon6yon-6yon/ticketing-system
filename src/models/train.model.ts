import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, JoinColumn, ManyToOne, JoinTable } from 'typeorm';
import { Seat } from './seat.model';
import { Location } from './location.model';

@Entity('trains')
export class Train {
    @PrimaryGeneratedColumn('increment', { name: 'id' })
    readonly id?: number;

    @Column({ type: 'varchar', length: 100 })
    readonly train_name: string;

    @Column({ type: 'varchar', length: 50 })
    readonly type: string; // e.g., Express, Local

    @Column({ type: 'timestamp' })
    readonly departure_time: Date;

    @Column({ type: 'timestamp' })
    readonly arrival_time: Date;
    
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    readonly created_at: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    readonly updated_at: Date;

    @OneToMany(() => Seat, (seat) => seat.bus)
    readonly seats: Seat[];

    @Column({ name: 'from_location' })
    readonly fromlocation: number;

    @ManyToOne(() => Location, (location) => location.trains_from)
    @JoinColumn({ name: 'from_location' })
    readonly from_location: Location;

    @Column({ name: 'to_location' })
    readonly tolocation: number;
    
    @ManyToOne(() => Location, (location) => location.trains_to)
    @JoinColumn({ name: 'to_location' })
    readonly to_location: Location;

}
