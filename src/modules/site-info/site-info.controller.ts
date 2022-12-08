import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { SiteInfoDto } from 'src/utils/dtos';
import { XApiKeyTokenGuard } from 'src/utils/guards/x-api-key-token.guard';
import { SiteInfoService } from './site-info.service';

@UseGuards(XApiKeyTokenGuard)
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
