import { Entity, PrimaryGeneratedColumn, Column, OneToMany, MongoCompatibilityError, ManyToOne, JoinColumn, JoinTable } from 'typeorm';
import { Seat } from './seat.model';
import { Location } from './location.model';

@Entity('buses')
export class Bus {
    @PrimaryGeneratedColumn('increment', { name: 'id' })
    readonly id?: number;

    @Column({ type: 'varchar', length: 100 })
    readonly bus_name: string;

    @Column({ type: 'varchar', length: 50 })
    readonly type: string;

    @Column({ type: 'timestamp' })
    readonly departure_time: Date;

    @Column({ type: 'timestamp' })
    readonly arrival_time: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    readonly created_at: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    readonly updated_at: Date;

    @Column({ name: 'from_location' })
    readonly fromlocation: number;

    @ManyToOne(() => Location, (location) => location.buses_from)
    @JoinColumn({ name: 'from_location' })
    readonly from_location: Location;
    
    @Column({ name: 'to_location' })
    readonly tolocation: number;

    @ManyToOne(() => Location, (location) => location.buses_to)
    @JoinColumn({ name: 'to_location' })
    readonly to_location: Location;

    @OneToMany(() => Seat, (seat) => seat.bus)
    readonly seats: Seat[];

}
