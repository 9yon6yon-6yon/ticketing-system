import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { IsEmail } from "class-validator";
import { Ticket } from './ticket.model';
@Entity('users')
export class User {
    @PrimaryGeneratedColumn('increment', { name: 'id' })
    readonly id?: number;

    @Column({ type: 'varchar', length: 100 })
    name: string;
    @IsEmail()
    @Column({ type: 'varchar', length: 150, unique: true })
    email: string;

    @Column({ type: 'varchar', length: 255 })
    password: string;
    @Column({ type: 'varchar', length: 15, nullable: true })
    phone?: string;

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    readonly created_at?: Date;

    @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    readonly updated_at?: Date;

    @OneToMany(() => Ticket, (ticket) => ticket.user, { eager: true, cascade: true })
    readonly tickets: Ticket[];


    constructor(name: string, email: string, password: string, phone?: string) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.phone = phone;
    }

    async hashPassword() {
        this.password = await bcrypt.hash(this.password, 10);
    }
}