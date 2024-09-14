import { IsNumber, IsString, IsOptional, IsDecimal, IsEnum } from 'class-validator';

export class CreateTicketDto {
    @IsNumber()
    @IsOptional()
    user_id?: number;

    @IsNumber()
    @IsOptional()
    bus_id?: number;

    @IsNumber()
    @IsOptional()
    train_id?: number;

    @IsNumber()
    seat_id: number;

    @IsDecimal()
    price: number;

    @IsString()
    @IsEnum(['Booked', 'Canceled'])
    status: string;

    @IsString()
    @IsOptional()
    payment_method?: string;

    @IsString()
    @IsOptional()
    guest_name?: string;

    @IsString()
    @IsOptional()
    guest_email?: string;

    @IsString()
    @IsOptional()
    guest_phone?: string;
}


export class UpdateTicketDto {
    @IsNumber()
    @IsOptional()
    user_id?: number;

    @IsNumber()
    @IsOptional()
    bus_id?: number;

    @IsNumber()
    @IsOptional()
    train_id?: number;

    @IsNumber()
    @IsOptional()
    seat_id?: number;

    @IsDecimal()
    @IsOptional()
    price?: number;

    @IsString()
    @IsEnum(['Booked', 'Canceled'])
    @IsOptional()
    status?: string;

    @IsString()
    @IsOptional()
    payment_method?: string;

    @IsString()
    @IsOptional()
    guest_name?: string;

    @IsString()
    @IsOptional()
    guest_email?: string;

    @IsString()
    @IsOptional()
    guest_phone?: string;
}
