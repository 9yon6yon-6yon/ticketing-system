import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn } from 'typeorm';
import { Bus } from './bus.model';
import { Train } from './train.model';

@Entity('locations')
export class Location {
    @PrimaryGeneratedColumn('increment', { name: 'id' })
    id: number;

    @Column({ type: 'varchar', length: 100 })
    readonly name: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    readonly updated_at: Date;

    @OneToMany(() => Bus, (bus) => bus.from_location,{ eager: true, cascade: true })
    readonly  buses_from: Bus;

    @OneToMany(() => Bus, (bus) => bus.to_location,{ eager: true, cascade: true })
    readonly buses_to: Bus;

    @OneToMany(() => Train, (train) => train.from_location,{ eager: true, cascade: true })
    readonly trains_from: Train;

    @OneToMany(() => Train, (train) => train.to_location,{ eager: true, cascade: true })
    readonly trains_to: Train;
}
