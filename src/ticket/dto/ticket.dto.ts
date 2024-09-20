import { IsNumber, IsString, IsOptional, IsDecimal, IsEnum, IsNotEmpty } from 'class-validator';

export class CreateTicketDto {
    @IsNumber()
    @IsNotEmpty()
    userId?: number;

    @IsNumber()
    @IsOptional()
    busId?: number;

    @IsNumber()
    @IsOptional()
    trainId?: number;

    @IsNumber()
    @IsNotEmpty()
    seatid: number;

    @IsNumber()
    @IsNotEmpty()
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
