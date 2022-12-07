import { Type } from 'class-transformer';
import { IsArray, IsOptional, IsString } from 'class-validator';
import { SiteInfoDeviceDto } from './site-info-device.dto';

export class SiteInfoDto {
    @IsString()
    id!: string;

    @IsString()
    name!: string;

    @IsArray()
    @IsOptional()
    @Type(() => SiteInfoDeviceDto)
    devices?: SiteInfoDeviceDto[];
}
