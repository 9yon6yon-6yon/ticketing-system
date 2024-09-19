import { IsNumber, IsString, IsOptional, IsDecimal, IsEnum } from 'class-validator';

export class CreateTicketDto {
    @IsNumber()
    @IsOptional()
    userId?: number;

    @IsNumber()
    @IsOptional()
    busId?: number;

    @IsNumber()
    @IsOptional()
    trainId?: number;

    @IsNumber()
    seatid: number;

    @IsDecimal()
    price: number;

    @IsString()
    @IsEnum(['Booked', 'Canceled'])
    status: string;

    @IsString()
    @IsOptional()
    payment_method?: string;

}


export class UpdateTicketDto {
    @IsNumber()
    @IsOptional()
    userId?: number;

    @IsNumber()
    @IsOptional()
    busId?: number;

    @IsNumber()
    @IsOptional()
    trainId?: number;

    @IsNumber()
    @IsOptional()
    seatid?: number;

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

}
