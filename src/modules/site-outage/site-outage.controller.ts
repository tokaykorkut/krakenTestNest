import { Controller, Param, Post } from '@nestjs/common';
import { EnhancedOutageDto } from 'src/utils/dtos';
import { SiteOutageService } from './site-outage.service';

@Controller('site-outages')
export class SiteOutageController {
    constructor(private readonly siteOutageService: SiteOutageService) {}

    //* post outages for a specific site with enhanced info
    @Post(':siteId')
    async getAllOutages(
        @Param('siteId') siteId: string,
        bodyData: EnhancedOutageDto[],
    ): Promise<void> {
        return await this.siteOutageService.addAllOutageInfoForOneSite(
            siteId,
            bodyData,
        );
    }
}
