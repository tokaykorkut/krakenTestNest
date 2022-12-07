import { Controller, Get, Param } from '@nestjs/common';
import { SiteInfoDto } from 'src/utils/dtos';
import { SiteInfoService } from './site-info.service';

@Controller('site-info')
export class SiteInfoController {
    constructor(private readonly siteInfoService: SiteInfoService) {}

    //* get info about a specific site
    @Get(':siteId')
    async getOneSiteInfo(
        @Param('siteId') siteId: string,
    ): Promise<SiteInfoDto> {
        return await this.siteInfoService.getOneSiteInfo(siteId);
    }
}
