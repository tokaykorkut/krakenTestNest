import { IsDateString, IsString } from 'class-validator';

export class OutageDto {
    @IsString()
    id!: string;

    @IsDateString()
    begin!: string;

    @IsDateString()
    end!: string;
}
