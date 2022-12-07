import { IsString } from 'class-validator';

export class SiteInfoDeviceDto {
    @IsString()
    id!: string;

    @IsString()
    name!: string;
}
