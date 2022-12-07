import { IsDateString, IsString } from 'class-validator';

export class EnhancedOutageDto {
    @IsString()
    id!: string;

    @IsString()
    name!: string;

    @IsDateString()
    begin!: Date;

    @IsDateString()
    end!: string;
}
