import {
    Body,
    Controller,
    Param,
    ParseArrayPipe,
    Post,
    UseGuards,
} from '@nestjs/common';
import { EnhancedOutageDto } from 'src/utils/dtos';
import { XApiKeyTokenGuard } from 'src/utils/guards/x-api-key-token.guard';
import { SiteOutageService } from './site-outage.service';

@UseGuards(XApiKeyTokenGuard)
@Controller('site-outages')
export class SiteOutageController {
    constructor(private readonly siteOutageService: SiteOutageService) {}

    //* post outages for a specific site with enhanced info
    @Post(':siteId')
    async getAllOutages(
        @Param('siteId') siteId: string,
        @Body(new ParseArrayPipe({ items: EnhancedOutageDto }))
        bodyData: EnhancedOutageDto[],
    ): Promise<void> {
        return await this.siteOutageService.addAllOutageInfoForOneSite(
            siteId,
            bodyData,
        );
    }
}
