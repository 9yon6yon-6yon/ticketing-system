import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToOne } from "typeorm";
import { User } from "./user.model";
import { Ticket } from "./ticket.model";

@Entity('payments')
export class Payment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    stripePaymentId: string;

    @Column()
    amount: number;

    @Column()
    currency: string;

    @Column()
    status: string;

    @Column({ name: 'user_id' })
    userId: number;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'user_id' })
    user: User;

    @Column({ name: 'ticket_id' })
    ticketId: number;

    @OneToOne(() => Ticket, (ticket) => ticket.payment, { nullable: false })  // One payment is linked to one ticket
    @JoinColumn({ name: 'ticket_id' })
    ticket: Ticket;  // Ticket associated with this paymen

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    readonly updated_at: Date;

}