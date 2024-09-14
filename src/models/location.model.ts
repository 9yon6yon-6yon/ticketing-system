import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Bus } from './bus.model';
import { Train } from './train.model';

@Entity('locations')
export class Location {
    @PrimaryGeneratedColumn('increment', { name: 'id' })
    readonly id?: number;

    @Column({ type: 'varchar', length: 100 })
    name: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    updated_at: Date;

    @OneToMany(() => Bus, (bus) => bus.from_location)
    buses_from: Bus[];

    @OneToMany(() => Bus, (bus) => bus.to_location)
    buses_to: Bus[];

    @OneToMany(() => Train, (train) => train.from_location)
    trains_from: Train[];

    @OneToMany(() => Train, (train) => train.to_location)
    trains_to: Train[];
}
